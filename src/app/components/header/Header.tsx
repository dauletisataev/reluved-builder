import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-6 flex items-center justify-between border-b border-[var(--border)]">
      <div className="flex items-center">
        <Image
          src="/reluved-logo.svg"
          alt="Reluved Logo"
          width={120}
          height={36}
          priority
        />
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link
          href="/support"
          className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        >
          Support
        </Link>
        <Link
          href="/launched"
          className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        >
          Launched
        </Link>
        <Link
          href="/learn"
          className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        >
          Learn
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link
          href="/signin"
          className="hidden md:block text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        >
          Sign In
        </Link>
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  );
};
