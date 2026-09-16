import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-sage text-cream hover:bg-sage-deep border-transparent",
  secondary:
    "bg-transparent text-ink border-ink/15 hover:border-ink/35 hover:bg-ink/[0.03]",
  inverse:
    "bg-cream text-ink border-transparent hover:bg-white",
  ghost:
    "bg-transparent text-ink border-transparent hover:bg-ink/[0.04]",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClass(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3.5 text-[13px] font-medium tracking-[0.04em] uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 md:min-h-0 md:py-3",
    variants[variant],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, className)} {...props} />
  );
}
