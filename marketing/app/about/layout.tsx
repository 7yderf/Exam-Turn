import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MHNTI - About us",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default React.memo(AboutLayout);
