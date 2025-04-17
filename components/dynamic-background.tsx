"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function DynamicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background opacity-90"></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", damping: 15 }}
        style={{ left: "10%", top: "20%" }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", damping: 20 }}
        style={{ right: "15%", bottom: "10%" }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 25 }}
        style={{ right: "30%", top: "15%" }}
      />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
    </div>
  );
} 