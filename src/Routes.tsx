import { Routes as RoutesContainer, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages/auth";
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
    </RoutesContainer>
  );
}
