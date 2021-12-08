import Logo from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import DashboardIcon from "shared/DashboardIcon/DashboardIcon";

const sideBarItems = [
  {
    label: "Inicio",
    icon: <DashboardIcon />,
    path: "/",
    id: 1,
  },
];

export default function Sidebar() {
  return (
    <div data-testid="sidebar" className="sidebar flex f-column ai-center">
      <img data-testid="logo" src={Logo} alt={"Helios"} />
      <nav>
        {sideBarItems.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={link.path}
              data-testid="link"
            >
              <div className="flex f-row ai-center">
                {link.icon} <p> {link.label} </p>
              </div>
            </NavLink>
          </li>
        ))}
      </nav>
    </div>
  );
}
