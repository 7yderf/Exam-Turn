import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@shared/lib/utils";
import "@marketing/styles/globals.css";

const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-HairlineItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-HeavyItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-ThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-lato",
});

const inter = Inter({
  preload: false,
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: false,
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "MHNTI - Elevating Care",
  description:
    "Connecting mental health professionals with evidence-based training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased min-h-screen font-sans",
          lato.variable,
          inter.variable,
          roboto.variable,
        )}>
        {children}
      </body>
    </html>
  );
}
