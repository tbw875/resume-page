"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mx-auto max-w-6xl px-6 py-20 md:py-28", className)}
    >
      {children}
    </motion.section>
  );
}
