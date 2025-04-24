import { HTMLProps, useEffect, useRef } from "react";
import { animate, AnimationPlaybackControls } from "framer-motion";

interface AnimateCounterProps extends HTMLProps<HTMLSpanElement> {
  total?: number | null;
}

const AnimateCounter = ({ total, ...rest }: AnimateCounterProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const initialCount = 0;
  const safeTotal = total === null || total === undefined ? 0 : total;

  useEffect(() => {
    if (typeof safeTotal !== "number" || isNaN(safeTotal) || safeTotal < 0) {
      console.error("Invalid 'total' value provided to AnimateCounter:", total);
      if (countRef.current) {
        countRef.current.textContent = "0"; // Reset to 0 for invalid values
      }
      return;
    }

    const count = countRef.current;

    const controls: AnimationPlaybackControls = animate(initialCount, safeTotal, {
      duration: 1,
      onUpdate: (value) => {
        if (count) {
          count.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => {
      controls.stop(); // Ensure animation stops cleanly
    };
  }, [safeTotal, total]);

  return <span {...rest} ref={countRef} />;
};

export default AnimateCounter;
