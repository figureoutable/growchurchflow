"use client";

import GradientButton from "@/components/kokonutui/gradient-button";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://cal.com/growchurchflow/discovery";

export function BookCallGradientButton({
  label = "Book a Call",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <GradientButton
      variant="orange"
      label={label}
      type="button"
      className={cn(
        "h-11 min-w-[10rem] rounded-full font-semibold shadow-sm",
        className
      )}
      onClick={() =>
        window.open(BOOKING_URL, "_blank", "noopener,noreferrer")
      }
    />
  );
}
