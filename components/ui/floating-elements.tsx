// components/ui/floating-elements.tsx
"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  const elements = [
    { size: 60, delay: 0, duration: 20 },
    { size: 80, delay: 2, duration: 25 },
    { size: 40, delay: 4, duration: 18 },
    { size: 100, delay: 1, duration: 30 },
    { size: 30, delay: 3, duration: 22 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        // Randomly select green color combinations for each element
        const greenGradients = [
          "from-green-400/10 to-green-600/10",
          "from-green-500/10 to-green-400/10",
          "from-green-600/10 to-green-500/10"
        ];
        const randomGradient = greenGradients[Math.floor(Math.random() * greenGradients.length)];
        
        return (
          <motion.div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r ${randomGradient} backdrop-blur-sm`}
            style={{
              width: element.size,
              height: element.size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
