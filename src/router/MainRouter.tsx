import RouterGuard from "core/guard/RouteGuard";
import DashboardPage from "module/Dashboard/Application/DashboardPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../module/Login/Application/LoginPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <RouterGuard redirect="/login" component={<DashboardPage />} />
        }
      />
    </Routes>
  );
}
