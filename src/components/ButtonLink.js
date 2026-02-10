import Link from "next/link";
import React from "react";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70";

  const variants = {
    primary:
      "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
    secondary:
      "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10",
    ghost: "text-slate-100 hover:bg-white/5",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

