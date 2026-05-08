import { createRoot } from "react-dom/client";
import { initGA4, initMetaPixel } from "@/lib/tracking";
import App from "./App";
import "./index.css";

initMetaPixel(import.meta.env.VITE_META_PIXEL_ID);
initGA4(import.meta.env.VITE_GA_MEASUREMENT_ID);

createRoot(document.getElementById("root")!).render(<App />);