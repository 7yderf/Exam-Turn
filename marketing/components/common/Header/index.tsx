"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

import Button from "@marketing/components/ui/Button";
import Drawer, {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@marketing/components/ui/Drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@marketing/components/ui/NavigationMenu";

import { cn } from "@shared/lib/utils";

const Header = (): ReactElement => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Find a Provider",
      href: "/provider",
    },
  ];

  return (
    <header
      className={cn(
        "w-full z-50 fixed top-0 left-0 transition-colors duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}>
      <div className="mx-auto max-w-7xl relative min-h-20 flex flex-row justify-between items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={require("@shared/assets/mhnti-header-logo.png")}
            alt="MHNTI Logo"
            className="h-10 w-16"
            priority
          />
          <p className="text-2xl font-bold text-primary">MHNTI</p>
        </Link>
        <div className="justify-start items-center gap-4 md:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Button
                    variant="text"
                    className={cn(
                      "text-lg text-primary",
                      path === item.href && "font-bold",
                    )}
                    asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end">
          <div className="md:flex hidden">
            <Button>Login / Register</Button>
          </div>
          <div className="flex md:hidden">
            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="icon">
                  <Bars3Icon className="size-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent
                className="inset-x-0 top-20 p-4"
                aria-describedby={undefined}>
                <DrawerHeader className="hidden">
                  <DrawerTitle />
                </DrawerHeader>
                <NavigationMenu className="w-full flex justify-start items-start">
                  <NavigationMenuList className="w-full flex flex-col justify-start items-center">
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <Button
                          variant="text"
                          className={cn(
                            "text-lg text-primary",
                            path === item.href && "font-bold",
                          )}
                          asChild>
                          <Link href={item.href}>{item.title}</Link>
                        </Button>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
