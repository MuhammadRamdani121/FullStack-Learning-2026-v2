import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/theme/ThemeProvider";
import DocsLayout from "./components/layout/DocsLayout";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import SavedPage from "./pages/SavedPage";

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>

      <p className="mt-3 text-slate-500">Page not found.</p>

      <a href="/" className="mt-5 text-indigo-600 hover:underline">
        Back to homepage
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route index element={<HomePage />} />
            <Route path="saved" element={<SavedPage />} />
            <Route path="docs/:slug" element={<DocsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
