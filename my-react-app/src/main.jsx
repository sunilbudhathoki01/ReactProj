import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Message from "./Message.jsx";
import App from "./App";

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Provider store={store}>
                <App></App>
            </Provider>
            
        </StrictMode>
    );
} else {
    console.error("Root element with id 'root' not found in the DOM.");
}
