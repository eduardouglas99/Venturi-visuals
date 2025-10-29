"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
  separator?: boolean;
  classname: string;
};

export default function Counter({
  to,
  duration = 3000,
  prefix = "",
  suffix = "",
  locale = "en-US",
  separator = true,
  classname = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(Math.floor((progress / duration) * to), to);
      setCount(current);
      if (current < to) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [to, duration]);

  const formatted = separator
    ? new Intl.NumberFormat(locale).format(count)
    : count;

  return (
    <span className={classname}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
