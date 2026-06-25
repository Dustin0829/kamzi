import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

function PageFallback() {
  return <div className="min-h-screen bg-cream" aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
