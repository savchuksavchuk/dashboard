import { useContext } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import "./Topbar.scss";
import { Context } from "../../context/context";

export const Topbar = () => {
  const { toggleSidebar } = useContext(Context);

  return (
    <div className="topbar">
      <p className="topbar__greeating">Hello Evano 👋🏼,</p>
      <div className="topbar__burger">
        <BurgerButton src="./assets/burger.svg" onPress={toggleSidebar} />
      </div>
    </div>
  );
};
