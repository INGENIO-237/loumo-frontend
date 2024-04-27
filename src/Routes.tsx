import { Routes as RoutesContainer, Route } from "react-router-dom";
import {
  ForgotPasswordPage,
  ForgotPasswordConfirmPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
} from "./pages/auth";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import MerchantPage from "./pages/Merchant";

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
      <Route
        path="/forgot-password-confirm"
        element={<ForgotPasswordConfirmPage />}
      />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/profile"
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        />
        <Route
          path="/become-merchant"
          element={
            <MainLayout>
              <MerchantPage />
            </MainLayout>
          }
        />
      </Route>
    </RoutesContainer>
  );
}
