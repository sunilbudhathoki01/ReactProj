import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import Card from "./Card";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App></App>
    </StrictMode>

)
