import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { OnlineStatus } from "../OnlineStatus";

interface ShellProps {
  children: ReactNode;
  onBack?: () => void;
  backLabel?: string;
  hideHome?: boolean;
  dark?: boolean;
}

export function Shell({ children, onBack, backLabel = "Zurück", hideHome, dark }: ShellProps) {
  const navigate = useNavigate();

  return (
    <div className={`flex min-h-svh flex-col ${dark ? "bg-mdp-navy-950 text-white" : "bg-mdp-bg text-mdp-ink"}`}>
      <header className="flex items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-4">
          {onBack ? (
            <button
              onClick={onBack}
              className={`flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 text-base font-medium ${
                dark ? "text-mdp-navy-100 hover:bg-white/10" : "text-mdp-slate-500 hover:bg-mdp-slate-100"
              }`}
            >
              ← {backLabel}
            </button>
          ) : (
            <div />
          )}
        </div>
        <button
          onClick={() => !hideHome && navigate("/")}
          className="cursor-pointer"
          aria-label="Zur Startseite"
        >
          <Logo variant="wordmark" />
        </button>
        <OnlineStatus />
      </header>
      <main className="flex flex-1 flex-col px-6 pb-10 sm:px-10">{children}</main>
    </div>
  );
}
