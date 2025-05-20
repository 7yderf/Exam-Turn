import * as React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface BioDialogProps {
  name: string;
  avatar: string;
  bio: React.ReactNode;
}

const BioDialog: React.FC<BioDialogProps> = ({ name, avatar, bio }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <div className="w-[300px] aspect-square rounded-2xl overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <p className="text-lg font-bold text-primary text-center">{name}</p>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl">
        {bio}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default BioDialog;
