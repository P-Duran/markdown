import { I18nextProvider } from "react-i18next";
import "./App.css";
import { AuthProvider } from "./components/providers/AuthProvider";
import i18n from "./i18n";
import { AppRouter } from "./pages/AppRouter";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
