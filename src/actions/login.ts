"use server";

import { signIn } from "@/auth";

export async function login({ email }: { email: string }) {
  console.log("🚀 ~ login ~ email:", email);
  if (!email) return { message: "email is required" };

  const formData = new FormData();
  formData.append("email", email as string);
  console.log("🚀 ~ login ~ formData:", formData);
  try {
    await signIn("resend", { email, redirect: false });
    return { message: "ok" };
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
  }
}
