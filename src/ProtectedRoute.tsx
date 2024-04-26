import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
