interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

/** Business figures are real on first paint and never reset when scrolled into view. */
export default function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  return <span className="tabular-nums">{target}{suffix}</span>;
}
