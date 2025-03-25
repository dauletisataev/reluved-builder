import Image from "next/image";
import Link from "next/link";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        {/* Animated Heart Logo */}
        <div className="mb-8 relative w-24 h-24 gradient-bg rounded-2xl overflow-hidden flex items-center justify-center animate-pulse-slow">
          <IconHeartFilled className="animate-pulse w-12 h-12" />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span>Brand to </span>
          <span className="gradient-text">resale</span>
          <span> in seconds.</span>
        </h1>

        <p className="text-xl text-[var(--foreground-muted)] text-center mb-12 max-w-2xl">
          Reluved is your superhuman tool for launching brand resale
          marketplaces effortlessly.
        </p>

        {/* URL Input */}
        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your brand website URL"
              className="input-primary"
            />
            <button className="btn-primary absolute right-1 top-1 h-[calc(100%-8px)]">
              Launch
            </button>
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-3xl">
          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <path d="M9.7 17l4.6 0" />
            </svg>
            One-click integration
          </div>

          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 3h9v9" />
              <path d="M14 8l-5 5" />
            </svg>
            API connectivity
          </div>

          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
              <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
            </svg>
            Customizable storefront
          </div>

          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
              <path d="M12 12l8 -4.5" />
              <path d="M12 12v9" />
              <path d="M12 12l-8 -4.5" />
            </svg>
            Seller management
          </div>

          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7v11m4 -7v11m4 -8v11m4 -13v11m4 -8v11m4 -6v11" />
            </svg>
            Real-time analytics
          </div>

          <div className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 12a4 4 0 1 0 4 0v-1a2 2 0 0 0 -4 0" />
              <path d="M8 9h1" />
              <path d="M16 9h1" />
              <path d="M12 16a5 5 0 0 0 5 -5" />
            </svg>
            Sustainable shopping
          </div>
        </div>
      </main>
    </div>
  );
}
