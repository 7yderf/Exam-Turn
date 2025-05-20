import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  href?: string;
}

const GooglePlayButton: FC<ButtonProps> = ({ href = "/" }): ReactElement => (
  <Link href={href} className="h-20 w-64">
    <Image
      src={require("@shared/assets/marketing/GooglePlay.svg")}
      alt="MHNTI Logo"
      className="h-20 w-64"
      priority
    />
  </Link>
);

export default GooglePlayButton;
