"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StarField() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate star coordinates on client side to prevent hydration mismatches
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generated);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: star.opacity * 0.4 }}
          animate={{
            opacity: [
              star.opacity * 0.2,
              star.opacity,
              star.opacity * 0.2,
            ],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#E8F4F8]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: star.size > 2 ? "0 0 6px rgba(0, 255, 135, 0.6)" : "none",
          }}
        />
      ))}
    </div>
  );
}
