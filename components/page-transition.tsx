"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type ParallaxProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  enter: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.98,
    transition: { 
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      when: "afterChildren",
      staggerChildren: 0.05
    }
  }
};

const parallaxVariants = {
  hidden: { opacity: 0, y: 100 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -100,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

export function PageTransition({ children }: ParallaxProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={containerVariants}
      className="w-full"
    >
      <motion.div
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ParallaxItem({ 
  children, 
  index = 0, 
  className = "" 
}: { 
  children: ReactNode; 
  index?: number; 
  className?: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={parallaxVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 