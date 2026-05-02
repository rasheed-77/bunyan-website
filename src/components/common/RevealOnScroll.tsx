"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** ظهور خفيف عند التمرير — fade + slide بسيط، يُحترم تفضيل تقليل الحركة في النظام */
export default function RevealOnScroll({ children, className }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "-32px 0px -24px 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.48,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
