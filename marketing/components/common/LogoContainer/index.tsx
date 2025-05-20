"use client";

import React, { FC, ReactElement } from "react";
import Image from "next/image";

import { cn } from "@shared/lib/utils";

const LogoContainer: FC<React.ComponentProps<"div">> = React.memo(
  ({ className, ...props }): ReactElement => (
    <div
      className={cn(
        "w-full aspect-square flex justify-center items-center",
        className,
      )}
      {...props}>
      <Image
        src={require("@shared/assets/mhnti-logo.svg")}
        alt="MHNTI Logo"
        className="w-full h-full"
        priority
      />
    </div>
  ),
);

export default LogoContainer;
