import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { ChakraProvider, createSystem } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";

const system = createSystem(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Provider>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
