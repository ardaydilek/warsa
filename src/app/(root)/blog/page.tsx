import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page({}) {
  const { userId } = auth();

  const user = await prisma.user.findUnique({
    where: {
      externalId: userId!,
    },
  });

  return (
    <div className="container my-28 flex flex-col items-center gap-10 text-center text-surface-foreground">
      <h1>Page`</h1>
    </div>
  );
}
