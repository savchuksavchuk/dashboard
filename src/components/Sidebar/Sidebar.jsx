import { useContext } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";
import "./Sidebar.scss";
import { Context } from "../../context/context";

export const Sidebar = () => {
  const { toggleSidebar } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="sidebar__topbar">
        <Logo />
        <div className="sidebar__close">
          <BurgerButton src="./assets/close.svg" onPress={toggleSidebar} />
        </div>
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
