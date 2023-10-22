// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// Types and Interfaces
type ModalProps = {
  dialogFooter?: ReactNode;
  children: ReactNode;
  dialogTitle: string;
  dialogDescription?: string;
  dialogTrigger: ReactNode;
  openState?: boolean;
  setOpenState?: (open: boolean) => void;
};

function Modal({
  dialogFooter,
  children,
  dialogTitle,
  dialogDescription,
  dialogTrigger,
  openState,
  setOpenState,
}: ModalProps) {
  return (
    <Dialog open={openState} onOpenChange={setOpenState}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && (
            <DialogDescription>{dialogDescription}</DialogDescription>
          )}
        </DialogHeader>
        {children}
        {dialogFooter && <DialogFooter>{dialogFooter}</DialogFooter>}
      </DialogContent >
    </Dialog>
  );
}

export default Modal;
export type { ModalProps };
