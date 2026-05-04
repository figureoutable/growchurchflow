"use client";

/**
 * @author: @dorianbaffier
 * @description: Particle Button
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ComponentProps, type ReactNode, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ParticleButtonProps = ComponentProps<typeof Button> & {
  children?: ReactNode;
  onSuccess?: () => void;
  successDuration?: number;
};

function SuccessParticles({
  centerX,
  centerY,
}: {
  centerX: number;
  centerY: number;
}) {
  return (
    <AnimatePresence>
      {[...Array(6)].map((_, i) => {
        const burstX = (i % 2 === 0 ? 1 : -1) * (22 + (i * 11) % 36);
        const burstY = -(14 + (i * 13) % 40);
        return (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              x: [0, burstX],
              y: [0, burstY],
            }}
            className="fixed h-1.5 w-1.5 rounded-full bg-brand-lime opacity-95"
            initial={{
              scale: 0,
              x: 0,
              y: 0,
            }}
            style={{ left: centerX, top: centerY }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

export default function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1000,
  className,
  ...props
}: ParticleButtonProps) {
  const [burst, setBurst] = useState<{ x: number; y: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick: NonNullable<ComponentProps<typeof Button>["onClick"]> = (
    e
  ) => {
    onClick?.(e);
    const el = buttonRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setBurst({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setTimeout(() => {
      setBurst(null);
      onSuccess?.();
    }, successDuration);
  };

  return (
    <>
      {burst && <SuccessParticles centerX={burst.x} centerY={burst.y} />}
      <Button
        className={cn(
          "relative",
          burst && "scale-95",
          "transition-transform duration-100",
          className
        )}
        ref={buttonRef}
        {...props}
        onClick={handleClick}
      >
        {children}
        <MousePointerClick className="h-4 w-4" />
      </Button>
    </>
  );
}
