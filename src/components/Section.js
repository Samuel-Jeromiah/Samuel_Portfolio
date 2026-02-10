import React from "react";
import Container from "./Container";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-medium tracking-wide text-emerald-300/90">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              {title}
            </h2>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

