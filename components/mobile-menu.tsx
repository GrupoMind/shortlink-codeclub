"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Analytics", href: "/analytics" },
    { name: "Login", href: "/auth/login" },
  ];

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        className="p-2 text-foreground/90 hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-divider z-50">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={clsx(
                  "py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground",
                )}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
