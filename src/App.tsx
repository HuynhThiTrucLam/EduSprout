import AppRouter from "./routes";
import { AuthProvider } from "./services/auth_service";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
