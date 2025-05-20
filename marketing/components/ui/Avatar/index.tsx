"use client";

import * as React from "react";
import Image from "next/image";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { Provider } from "@shared/graphql/__generated__/graphql";
import { S3ImageLoader } from "@shared/lib/next-s3-loader";
import { cn } from "@shared/lib/utils";

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    provider?: Provider;
  };

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ provider, className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}>
      {provider?.photoLink ? (
        <Image
          src={provider.photoLink}
          className="aspect-square h-full w-full"
          alt="avatar"
          fill
        />
      ) : (
        <AvatarFallback>
          <div className="relative flex items-center justify-center font-medium h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary text-white">
            {`${provider?.firstName?.charAt(0) ?? ""}${provider?.lastName?.charAt(0) ?? ""}${provider?.providerData.email.charAt(0)}`
              .toUpperCase()
              .substring(0, 2)}
          </div>
        </AvatarFallback>
      )}
    </AvatarPrimitive.Root>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const DefaultAvatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full aspect-square overflow-hidden", className)}
    {...props}>
    <Image
      src={require("@shared/assets/samples/sample-user1.jpg")}
      alt="user avatar"
      className="object-cover"
      priority
    />
  </div>
));

export default Avatar;
