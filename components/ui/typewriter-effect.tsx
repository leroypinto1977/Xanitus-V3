// components/ui/typewriter-effect.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  return (
    <div className={cn("text-center", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={`word-${idx}`}
          className={cn("text-white", word.className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: idx * 0.1,
          }}
        >
          {word.text}{" "}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("text-purple-400", cursorClassName)}
      >
        |
      </motion.span>
    </div>
  );
};
