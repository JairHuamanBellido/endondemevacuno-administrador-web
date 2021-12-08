import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div className="dashboard-layout flex f-row">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
