import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 ${className}`}
    >
      {children}
    </span>
  );
}

