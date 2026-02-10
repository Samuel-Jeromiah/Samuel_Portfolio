import { useEffect, useMemo, useState } from "react";

export default function useActiveSection(sectionIds) {
  const ids = useMemo(() => sectionIds ?? [], [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        // bias towards section near the top under the fixed nav
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.05, 0.15, 0.25, 0.35, 0.5],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return { activeId, setActiveId };
}

