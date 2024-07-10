"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signIn } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { login } from "@/actions/login";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Server name is required!",
  }),
});

export default function RegisterModal({}) {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const [isMounted, setIsMounted] = useState(false);

  const isModalOpen = isOpen && type === "register";

  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = await signIn("resend", {
        email: values.email,
        redirect: false,
      });

      if (url?.status === 200) {
        onOpen("check-email", { email: values.email });
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  if (!isMounted) return null;

  return (
    <Dialog
      key="register"
      open={isModalOpen}
      onOpenChange={handleClose}
    >
      <DialogContent className="bg-surface text-surface-foreground p-0 overflow-hidden border-surface-container">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Kayıt Ol
          </DialogTitle>
          <DialogDescription className="text-center text-outline">
            Mail adresine sihirli bir link yollayacağız.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-outline">
                      Mail
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={isLoading}
                        className="bg-surface-container-high border-0 focus-visible:ring-0 text-surface-foreground focus-visible:ring-offset-0 text-base"
                        placeholder="Mail adresiniz"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="bg-surface-container-high px-6 py-4">
              {/* <Button
                variant={"link"}
                onClick={() => onOpen("login")}
                className="self-start text-start"
              >
                <span className="text-surface-foreground inline-block pr-2">
                  Hesabın var mı?
                </span>{" "}
                Giriş Yap
              </Button> */}
              <Button
                variant={isLoading ? "ghost" : "chips"}
                type="submit"
                disabled={isLoading}
                className=""
              >
                Kayıt Ol
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
