import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { TimeProvider } from "./components/providers/TimeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TimeProvider>
        <App />
      </TimeProvider>
    </Provider>
  </StrictMode>,
);
