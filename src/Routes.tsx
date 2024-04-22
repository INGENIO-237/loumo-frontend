import { Routes as RoutesContainer, Route } from "react-router-dom";
import { 
  ForgotPasswordPage, ForgotPasswordConfirmPage, 
  LoginPage, 
  RegisterPage 
} from "./pages/auth";
import MainLayout from "./layouts/MainLayout";

export default function Routes() {
  return (
    <RoutesContainer>
      <Route
        path="/"
        element={
          <MainLayout>
            <h1>Loumo</h1>
          </MainLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/forgot-password-confirm" element={<ForgotPasswordConfirmPage />} />
    </RoutesContainer>
  );
}
