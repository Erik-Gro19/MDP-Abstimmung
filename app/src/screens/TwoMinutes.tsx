import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twoMinuteCards } from "../data/content";
import { Logo } from "../components/Logo";
import { ProgressDots } from "../components/ui/ProgressDots";

export function TwoMinutes() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(-1); // -1 = Titelfolie

  const card = index >= 0 ? twoMinuteCards[index] : null;
  const isLast = index === twoMinuteCards.length - 1;

  function next() {
    if (index < twoMinuteCards.length - 1) setIndex((i) => i + 1);
    else navigate("/abschluss");
  }

  function prev() {
    if (index === -1) navigate("/");
    else setIndex((i) => i - 1);
  }

  return (
    <div className="flex min-h-svh flex-col bg-mdp-navy-950 text-white">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <button
          onClick={prev}
          className="min-h-[44px] rounded-xl px-3 text-base font-medium text-mdp-navy-100 hover:bg-white/10"
        >
          ← {index === -1 ? "Startseite" : "Zurück"}
        </button>
        <Logo variant="wordmark" />
        <button
          onClick={() => navigate("/")}
          className="min-h-[44px] rounded-xl px-3 text-base font-medium text-mdp-navy-100 hover:bg-white/10"
        >
          Beenden ✕
        </button>
      </header>

      <main
        className="flex flex-1 cursor-pointer flex-col items-center justify-center px-8 text-center sm:px-20"
        onClick={next}
      >
        {index === -1 ? (
          <div className="flex flex-col items-center">
            <Logo variant="full" className="mb-4" />
            <p className="mt-6 text-xl text-mdp-navy-100">Zum Start antippen</p>
          </div>
        ) : (
          card && (
            <div className="flex max-w-3xl flex-col items-center">
              <span className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-mdp-gold-400">
                {String(index + 1).padStart(2, "0")} / {String(twoMinuteCards.length).padStart(2, "0")}
              </span>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{card.title}</h2>
              <p className="mt-8 text-2xl leading-relaxed text-mdp-navy-50 sm:text-3xl">
                „{card.claim.text}“
              </p>
            </div>
          )
        )}
      </main>

      <footer className="flex flex-col items-center gap-4 px-6 pb-8">
        {index >= 0 && <ProgressDots step={index + 1} total={twoMinuteCards.length} />}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="min-h-[64px] rounded-2xl bg-mdp-gold-500 px-14 text-xl font-semibold text-mdp-navy-950 hover:bg-mdp-gold-600"
        >
          {index === -1 ? "Starten" : isLast ? "Zum Abschluss" : "Weiter"}
        </button>
      </footer>
    </div>
  );
}
