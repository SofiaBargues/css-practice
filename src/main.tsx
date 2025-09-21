import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import QrComponent from "./qr-code-component.tsx";
import PreviewCard from "./blog-preview-card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <QrComponent /> */}
    <PreviewCard />
  </StrictMode>
);
