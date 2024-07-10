"use client";
import { useModal } from "@/hooks/use-modal-store";

import { Button } from "@/components/ui/button";

export default function AuthButtons({}) {
  const { onOpen } = useModal();
  return (
    <>
      <Button
        variant={"default"}
        className="rounded-lg text-primary-foreground font-bold hover:bg-primary/90"
        onClick={() => {
          onOpen("register");
          console.log("register");
        }}
      >
        Kayıt Ol / Giriş Yap
      </Button>
      {/* <Button
        className="rounded-lg font-bold"
        onClick={() => onOpen("login")}
      >
        Giriş Yap
      </Button> */}
    </>
  );
}
