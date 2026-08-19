import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-light" | "ghost" | "gold";
  size?: "lg" | "md";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-colors duration-150 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500";

const variants: Record<string, string> = {
  primary: "bg-mdp-navy-900 text-white hover:bg-mdp-navy-800",
  secondary:
    "bg-white text-mdp-navy-900 border-2 border-mdp-navy-900 hover:bg-mdp-navy-50",
  "outline-light": "bg-transparent text-white border-2 border-white hover:bg-white/10",
  ghost: "bg-transparent text-mdp-navy-700 hover:bg-mdp-navy-50",
  gold: "bg-mdp-gold-500 text-mdp-navy-950 hover:bg-mdp-gold-600",
};

const sizes: Record<string, string> = {
  lg: "px-8 py-5 text-xl min-h-[64px]",
  md: "px-6 py-3.5 text-base min-h-[52px]",
};

export function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
