import { useEffect, useState } from "react";

// Zeigt dezent an, ob gerade eine Internetverbindung besteht.
// Die App selbst funktioniert in beiden Zuständen identisch — siehe
// /docs/06-offline-konzept.md. Das Badge ist reine Information für die
// Person, die die App bedient (z. B. um zu wissen, ob am Ende ein
// Sync möglich wäre), kein Blocker.
export function OnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-mdp-slate-500">
      <span
        className={`h-2 w-2 rounded-full ${online ? "bg-mdp-positive" : "bg-mdp-slate-300"}`}
      />
      {online ? "Online" : "Offline-Modus"}
    </div>
  );
}
