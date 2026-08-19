import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { DialogFlow } from "./screens/dialog/DialogFlow";
import { TwoMinutes } from "./screens/TwoMinutes";
import { TopicsExplore } from "./screens/TopicsExplore";
import { WhatChangesForMe } from "./screens/WhatChangesForMe";
import { ShiftModel } from "./screens/concepts/ShiftModel";
import { HousingFund } from "./screens/concepts/HousingFund";
import { StateIndustry } from "./screens/concepts/StateIndustry";
import { PartyTrust } from "./screens/concepts/PartyTrust";
import { Closing } from "./screens/Closing";
import { AdminGate } from "./screens/admin/AdminGate";
import { AdminDashboard } from "./screens/admin/AdminDashboard";
import { AdminSurveys } from "./screens/admin/AdminSurveys";
import { AdminTopics } from "./screens/admin/AdminTopics";
import { AdminResults } from "./screens/admin/AdminResults";
import { AdminQr } from "./screens/admin/AdminQr";

// HashRouter: funktioniert zuverlässig offline / als installierte
// Startbildschirm-App auf dem iPad, ohne Server-seitiges Routing.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog/*" element={<DialogFlow />} />
        <Route path="/zwei-minuten" element={<TwoMinutes />} />
        <Route path="/themen" element={<TopicsExplore />} />
        <Route path="/was-bedeutet-das" element={<WhatChangesForMe />} />
        <Route path="/konzepte/schichtmodell" element={<ShiftModel />} />
        <Route path="/konzepte/wohnungsbau" element={<HousingFund />} />
        <Route path="/konzepte/industrie" element={<StateIndustry />} />
        <Route path="/konzepte/vertrauen" element={<PartyTrust />} />
        <Route path="/abschluss" element={<Closing standalone />} />
        <Route path="/admin" element={<AdminGate />} />
        <Route path="/admin/start" element={<AdminDashboard />} />
        <Route path="/admin/umfragen" element={<AdminSurveys />} />
        <Route path="/admin/themen" element={<AdminTopics />} />
        <Route path="/admin/ergebnisse" element={<AdminResults />} />
        <Route path="/admin/qr" element={<AdminQr />} />
      </Routes>
    </HashRouter>
  );
}
