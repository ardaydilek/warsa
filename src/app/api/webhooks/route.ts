import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET to .env or .env.local file");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_signature || !svix_timestamp) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("ERROR_VERIFYING_WEBHOOK", err);
    return new Response("Error occured -- invalid signature", {
      status: 400,
    });
  }

  // const { id } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
      try {
        const user = await prisma.user.create({
          data: {
            externalId: payload.data.id,
            name: `${payload.data.first_name} ${payload.data.last_name}`,
            email: payload.data.email_addresses[0].email_address,
            imageUrl: payload.data.image_url,
          },
        });

        if (!user) throw new Error("User not created");
      } catch (error) {
        console.log("ERROR_WHILE_CREATING_USER_FROM_WEBHOOK", error);
      }
      break;
    case "user.deleted":
      try {
        const user = await prisma.user.delete({
          where: {
            externalId: payload.data.id,
          },
        });

        if (!user) throw new Error("User not created");
      } catch (error) {
        console.log("ERROR_WHILE_DELETING_USER_FROM_WEBHOOK", error);
      }
      break;
    case "user.updated":
      try {
        const user = await prisma.user.update({
          where: {
            externalId: payload.data.id,
          },
          data: {
            name: `${payload.data.first_name}${payload.data.last_name}`,
            email: payload.data.email_addresses[0].email_address,
            imageUrl: payload.data.image_url,
          },
        });

        if (!user) throw new Error("User not created");
      } catch (error) {
        console.log("ERROR_WHILE_UPDATING_USER_FROM_WEBHOOK", error);
      }
      break;
    default:
      break;
  }
  return new Response("", { status: 200 });
}
