import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Formulario from "./Formulario";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="contenedor">
      <Formulario />
    </div>
  </StrictMode>
);
