import RouterGuard from "core/guard/RouteGuard";
import DashboardPage from "module/Dashboard/Application/DashboardPage";
import UserPage from "module/Dashboard/Application/pages/UsersPage";
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
      >
        <Route index element={<UserPage />} />
      </Route>
    </Routes>
  );
}
