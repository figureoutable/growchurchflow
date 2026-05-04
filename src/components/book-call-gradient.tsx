"use client";

import { useRouter } from "next/navigation";
import GradientButton from "@/components/kokonutui/gradient-button";
import { cn } from "@/lib/utils";

export function BookCallGradientButton({
  label = "Book a Call",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <GradientButton
      variant="orange"
      label={label}
      type="button"
      className={cn(
        "h-11 min-w-[10rem] rounded-full font-semibold shadow-sm",
        className
      )}
      onClick={() => router.push("/contact")}
    />
  );
}
