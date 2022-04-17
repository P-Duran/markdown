import { Box } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import "./App.css";
import { AuthProvider } from "./components/providers/AuthProvider";
import { ModalProvider } from "./components/providers/ModalProvider";
import i18n from "./i18n";
import { AppRouter } from "./pages/AppRouter";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f6f7f9" }}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <ModalProvider>
            <AppRouter />
          </ModalProvider>
        </AuthProvider>
      </I18nextProvider>
    </Box>
  );
}

export default App;
