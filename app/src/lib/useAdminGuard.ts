import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SESSION_KEY = "mdp-admin-unlocked";

export function isAdminUnlocked(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

// Schützt Admin-Unterseiten vor direktem Aufruf ohne PIN.
export function useAdminGuard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdminUnlocked()) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);
}
