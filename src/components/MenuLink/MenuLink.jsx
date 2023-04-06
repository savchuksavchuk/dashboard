import "./MenuLink.scss";
import classNames from "classnames";

//selected props is created only for manually setting styles for selected link 
//if we used Router it's function could be replaced by NavLink

export const MenuLink = ({
  to,
  defIcon,
  activeIcon,
  name,
  selected = false,
}) => {
  return (
    <a
      href={to}
      className={classNames("menuLink", {
        "menuLink--active": selected,
      })}>
      <img
        src={selected ? activeIcon : defIcon}
        alt="icon"
        className="menuLink__icon"
      />
      <span className="menuLink__text">{name}</span>
      {selected ? (
        <img src="/assets/chevron-right-white.svg" alt="arrow" className="menuLink__chevrone"/>
      ) : (
        <img src="/assets/chevron-right.svg" alt="arrow" className="menuLink__chevrone"/>
      )}
    </a>
  );
};
