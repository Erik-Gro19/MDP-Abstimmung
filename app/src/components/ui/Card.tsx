import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-mdp-slate-200 bg-white shadow-[0_2px_10px_rgba(11,31,58,0.06)] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
