import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";

// PROTOTYP-HINWEIS: Dies ist eine einfache PIN-Sperre für die Demo,
// KEINE echte Authentifizierung. Vor produktivem Einsatz durch echte
// Anmeldung (z. B. Geräte-Passcode-Gate, individuelle Admin-Accounts,
// idealerweise mit MFA) ersetzen — siehe /docs/07-datenschutzkonzept.md.
const DEMO_PIN = "1974";
const SESSION_KEY = "mdp-admin-unlocked";

export function AdminGate() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      navigate("/admin/start", { replace: true });
    }
  }, [navigate]);

  function submit() {
    if (pin === DEMO_PIN) {
      sessionStorage.setItem(SESSION_KEY, "1");
      navigate("/admin/start");
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-mdp-navy-950 px-6 text-white">
      <span className="mb-4 text-3xl">🔒</span>
      <h1 className="text-2xl font-bold">Admin-Bereich</h1>
      <p className="mt-2 max-w-xs text-center text-sm text-mdp-navy-100">
        Nur für MDP-Redaktion. Prototyp-PIN, keine produktive Authentifizierung.
      </p>
      <input
        type="password"
        inputMode="numeric"
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          setError(false);
        }}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        className="mt-8 w-48 rounded-2xl border-2 border-white/20 bg-white/5 px-5 py-4 text-center text-2xl tracking-[0.4em] text-white focus:border-mdp-gold-400 focus:outline-none"
        placeholder="••••"
        autoFocus
      />
      {error && <p className="mt-3 text-sm text-red-400">Falscher PIN.</p>}
      <Button variant="gold" className="mt-8 px-14" onClick={submit}>
        Entsperren
      </Button>
      <button
        onClick={() => navigate("/")}
        className="mt-6 text-sm text-mdp-navy-300 hover:text-white"
      >
        ← Zurück zum Bürgermodus
      </button>
    </div>
  );
}
