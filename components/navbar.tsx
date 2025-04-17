"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { ThemeSwitch } from "./theme-switch";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Analytics", href: "/analytics" },
  ];

  return (
    <nav className="w-full py-3 px-6 border-b border-divider">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2" href="/">
            <span className="font-bold text-xl text-primary">ShortLink</span>
          </Link>

          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={clsx(
                  "text-sm transition-colors",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground",
                )}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <div className="hidden sm:block">
            <Link
              className={clsx(
                "text-sm",
                pathname.includes("/auth")
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground",
              )}
              href="/auth/login"
            >
              Login
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
