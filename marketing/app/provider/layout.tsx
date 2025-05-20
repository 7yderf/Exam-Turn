import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MHNTI - Find a Provider",
};

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default React.memo(ProviderLayout);
