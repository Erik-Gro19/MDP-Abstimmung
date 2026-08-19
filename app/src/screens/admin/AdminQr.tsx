import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Shell } from "../../components/layout/Shell";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useAdminGuard } from "../../lib/useAdminGuard";
import { DEFAULT_QR_TARGET, loadQrTarget, resetQrTarget, saveQrTarget } from "../../lib/adminContent";

export function AdminQr() {
  useAdminGuard();
  const navigate = useNavigate();
  const [url, setUrl] = useState(loadQrTarget());
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function persist() {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:") throw new Error("nur https");
      saveQrTarget(url);
      setSavedAt(new Date().toLocaleTimeString("de-DE"));
      setError(null);
    } catch {
      setError("Bitte eine gültige https://-URL eingeben.");
    }
  }

  function reset() {
    resetQrTarget();
    setUrl(DEFAULT_QR_TARGET);
    setSavedAt(null);
  }

  return (
    <Shell onBack={() => navigate("/admin/start")}>
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950">QR-Code-Ziel</h1>
        <p className="mt-2 text-lg text-mdp-slate-500">
          Ziel-URL für den QR-Code am Ende des Bürgerdialogs.
        </p>

        <Card className="mt-6 p-6">
          <label className="mb-2 block text-sm font-semibold text-mdp-navy-950">Ziel-URL</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-xl border-2 border-mdp-slate-200 px-4 py-3 text-lg focus:border-mdp-navy-500 focus:outline-none"
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

          <div className="mt-5 flex justify-center rounded-2xl bg-mdp-navy-50 p-6">
            <QRCodeSVG value={url} size={180} level="M" />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" size="md" onClick={reset}>
              Standard wiederherstellen
            </Button>
            <Button size="md" onClick={persist}>
              Speichern
            </Button>
          </div>
          {savedAt && <p className="mt-2 text-right text-sm text-mdp-positive">Gespeichert um {savedAt} Uhr.</p>}
        </Card>
      </div>
    </Shell>
  );
}
