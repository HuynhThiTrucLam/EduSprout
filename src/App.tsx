import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { AuthProvider } from "./services/auth_service";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
