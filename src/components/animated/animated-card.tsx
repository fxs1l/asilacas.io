import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/card";

interface Props {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
  duration?: number;
}
export default function AnimatedCard(props: Readonly<Props>) {
  const {
    children,
    className,
    tapScale = 1.1,
    hoverScale = 1.05,
    duration = 0.2,
  } = props;
  const MotionCard = motion(Card);
  // const hoverAnimation = {
  //   scale: hoverScale,
  //   border: "4px solid rgba(235, 203, 139, 0.8)",
  //   boxShadow: "0px 0px 15px rgba(235, 203, 139, 0.8)",
  //   transition: { duration: duration, ease: "easeInOut" },
  //   color: "rgb(235, 203, 139)",
  // };

  return (
    <MotionCard
      className={cn(className)}
      whileHover={{
        scale: hoverScale,
        border: "4px solid rgba(143, 188, 187, 0.8)",
        boxShadow: "0px 0px 15px rgba(143, 188, 187, 0.9)",
        transition: { duration: duration, ease: "easeInOut" },
        color: "rgb(235, 203, 139)",
      }}
      whileTap={{ scale: tapScale }}
    >
      {children}
    </MotionCard>
  );
}
