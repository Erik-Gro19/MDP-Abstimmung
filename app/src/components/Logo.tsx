import mdpLogo from "../assets/mdp-logo.png";

// Original-MDP-Logo (Kreisemblem, Schriftzug und Tagline sind Teil
// derselben Bilddatei). Es wird bewusst immer als Ganzes eingebunden —
// keine Beschneidung, keine Neuanordnung, keine Farbänderung der
// Symbolik. Die `variant` steuert nur die Anzeigegröße, nicht den
// Bildausschnitt.
interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  className?: string;
}

const sizeByVariant: Record<NonNullable<LogoProps["variant"]>, string> = {
  mark: "h-20 w-20",
  wordmark: "h-14 w-14",
  full: "h-40 w-40 sm:h-52 sm:w-52",
};

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <img
      src={mdpLogo}
      alt="MDP – Moderne Demokratische Partei"
      className={`${sizeByVariant[variant]} object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
