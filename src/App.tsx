import { I18nextProvider } from "react-i18next";
import "./App.css";
import { CurrentUserProvider } from "./components/providers/CurrentUserProvider";
import i18n from "./i18n";
import { AppRouter } from "./pages/AppRouter";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <CurrentUserProvider>
        <AppRouter />
      </CurrentUserProvider>
    </I18nextProvider>
  );
}

export default App;
