import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CountUp({
  end,
  start = 0,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  style,
}: CountUpProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>({ threshold: 0.2, triggerOnce: true });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (end - start) * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [duration, end, isVisible, start]);

  const formatted = useMemo(() => {
    const factor = 10 ** decimals;
    const rounded = Math.round(value * factor) / factor;

    const numberText = decimals > 0
      ? rounded.toFixed(decimals)
      : Math.round(rounded).toLocaleString();

    return `${prefix}${numberText}${suffix}`;
  }, [decimals, prefix, suffix, value]);

  return (
    <span ref={ref} className={className} style={style}>
      {formatted}
    </span>
  );
}