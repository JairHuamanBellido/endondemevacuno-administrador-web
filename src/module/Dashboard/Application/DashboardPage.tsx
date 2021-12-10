import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div className="dashboard flex f-row">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
