"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function PointerGlow() {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 400, damping: 30 });

  useEffect(() => {
    // Only enable pointer tracking on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-10 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(0,255,135,0.06)_0%,_rgba(0,212,255,0.03)_40%,_transparent_70%)] blur-[40px]"
      style={{
        left: cursorX,
        top: cursorY,
      }}
    />
  );
}
