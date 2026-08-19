import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Logo } from "../components/Logo";
import { loadQrTarget } from "../lib/adminContent";

// "Programm ansehen" und "Mitmachen" verlinken bewusst auf dieselbe
// Basis-URL wie der QR-Code: konkrete Unterseiten-Pfade der echten
// Website waren nicht bekannt und wurden nicht geraten. Sobald die
// Partei die genauen URLs nennt, können sie hier direkt eingetragen
// werden (oder künftig im Admin-Bereich → QR-Ziel verwaltet werden).
export function Closing({ standalone = false }: { standalone?: boolean }) {
  const navigate = useNavigate();
  const target = loadQrTarget();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-mdp-navy-950 px-6 py-10 text-center text-white">
      <Logo variant="mark" className="mb-8" />
      <h1 className="text-4xl font-bold sm:text-5xl">Vielen Dank für deine Zeit.</h1>
      <p className="mt-4 text-xl text-mdp-navy-100">Du möchtest mehr über die MDP erfahren?</p>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
        <QRCodeSVG value={target} size={260} level="M" />
      </div>

      <a
        href={target}
        target="_blank"
        rel="noreferrer"
        className="mt-6 text-lg font-medium text-mdp-gold-400 underline decoration-mdp-gold-400/40 underline-offset-4 hover:text-mdp-gold-300"
      >
        {target.replace(/^https?:\/\//, "")}
      </a>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href={target} target="_blank" rel="noreferrer">
          <Button variant="gold">Website öffnen</Button>
        </a>
        <a href={target} target="_blank" rel="noreferrer">
          <Button variant="outline-light">Programm ansehen</Button>
        </a>
        <a href={target} target="_blank" rel="noreferrer">
          <Button variant="outline-light">Mitmachen</Button>
        </a>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-12 min-h-[44px] rounded-xl px-4 text-base text-mdp-navy-200 hover:bg-white/10"
      >
        {standalone ? "← Zur Startseite" : "Neues Gespräch beginnen"}
      </button>
    </div>
  );
}
