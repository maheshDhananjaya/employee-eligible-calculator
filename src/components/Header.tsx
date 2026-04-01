"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/employee-compensation", label: "Employee Compensation" },
    { href: "/epf", label: "EPF" },
    { href: "/etf", label: "ETF" },
    { href: "/bank-loan", label: "Bank Loan" },
  ];

  return (
    <header className="bg-white border-b border-slate-200">
      <nav className="mx-auto max-w-5xl px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/employee-compensation"
            className="inline-flex items-center"
          >
            <img
              src="/logo.svg"
              alt="Employee Buddy Logo"
              className="w-48 h-12 hidden sm:block"
            />
          </Link>
          <div className="flex space-x-4 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
