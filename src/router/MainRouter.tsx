import RouterGuard from "core/guard/RouteGuard";
import DashboardPage from "module/Dashboard/Application/DashboardPage";
import CreateCredentialsPage from "module/Dashboard/Application/pages/CreateCredentialsPage";
import ManagersPage from "module/Dashboard/Application/pages/ManangersPage";
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
        <Route
          path="/generate-credentials"
          element={<CreateCredentialsPage />}
        />
        <Route  index element={<ManagersPage />} />
      </Route>
    </Routes>
  );
}
