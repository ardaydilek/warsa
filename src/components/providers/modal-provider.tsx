"use client";

import { useEffect, useState } from "react";

import RegisterModal from "../modals/register-modal";
import LoginModal from "../modals/login-modal";
import CheckEmailModal from "../modals/check-email-modal";

export function ModalProvider({}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RegisterModal />
      <LoginModal />
      <CheckEmailModal />
    </>
  );
}
