"use client";

import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CheckEmailModal({}) {
  const { isOpen, onClose, type, data, onOpen } = useModal();
  const { email } = data;
  const [isMounted, setIsMounted] = useState(false);

  const isModalOpen = isOpen && type === "check-email";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      key="check-email"
      open={isModalOpen}
      onOpenChange={handleClose}
    >
      <DialogContent className="bg-surface text-surface-foreground p-0 overflow-hidden border-surface-container">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-4xl text-center font-bold">
            Aramıza hoş geldin!
          </DialogTitle>
        </DialogHeader>

        <div className="py-8 px-6 text-sm">
          <b>{email}</b> adresine gönderdiğimiz link ile uygulamayı
          kullanabilirsiniz.
        </div>
      </DialogContent>
    </Dialog>
  );
}
