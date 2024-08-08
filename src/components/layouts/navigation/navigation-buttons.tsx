"use client";

import { ModeToggle } from "@/components/mode-toggle";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/layouts/navigation/mobile-navbar";
import { UserRoundPlus } from "lucide-react";

export default function NavigationButtons({}) {
  return (
    <div className="flex items-center gap-2">
      <ModeToggle />

      <SignedOut>
        <ClerkLoading>
          <Button className="hidden lg:flex">Giriş Yap</Button>
        </ClerkLoading>
        <SignInButton mode="modal">
          <Button className="hidden lg:flex">Giriş Yap</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <ClerkLoading>
          <div className="size-6 rounded-full bg-primary" />
        </ClerkLoading>
        <UserButton
          appearance={{
            elements: {
              userButtonBox: "",
              avatarBox: "size-6",
            },
          }}
        >
          <UserButton.UserProfileLink
            label="Hesap Detayları"
            url="/account/profile"
            labelIcon={<UserRoundPlus className="size-4" />}
          />
          {/* Custom Page Example */}
          {/* <UserButton.UserProfilePage
            label="Terms"
            labelIcon={<DotIcon />}
            url="terms"
          >
            <div>
              <h1>Custom Terms Page</h1>
              <p>This is the custom terms page</p>
            </div>
          </UserButton.UserProfilePage> */}
        </UserButton>
      </SignedIn>

      <MobileNavbar />
    </div>
  );
}
