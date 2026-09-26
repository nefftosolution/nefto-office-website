import { useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ value, label, light = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ""));
      if (start === end) return;
      let totalMilis = 200;
      let incrementTime = totalMilis / end;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="space-y-1 text-center">
      <h3
        className={`md:text-5xl text-3xl font-black ${light ? "text-black" : "text-white"}`}
      >
        {count}
        {value.replace(/[0-9]/g, "")}
      </h3>
      <p
        className={`text-[10px] uppercase tracking-[0.3em] font-bold ${light ? "text-zinc-600" : "text-zinc-300"}`}
      >
        {label}
      </p>
    </div>
  );
};

export default Counter;
