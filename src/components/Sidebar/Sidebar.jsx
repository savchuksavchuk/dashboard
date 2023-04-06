import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <div className="sidebar__nav">
        <Nav />
      </div>
      <div className="sidebar__user">
        <User />
      </div>
    </div>
  );
};
