import "./Nav.scss";
import { MenuLink } from "../MenuLink/MenuLink";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/key.svg" activeIcon="/assets/key-white.svg" name="Dashboard" />
        </li>
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/square.svg" activeIcon="/assets/square-white.svg" name="Product" />
        </li>
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/user.svg" activeIcon="/assets/user-white.svg" name="Customers" selected />
        </li>
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/wallet.svg" activeIcon="/assets/wallet-white.svg" name="Income" />
        </li>
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/discount.svg" activeIcon="/assets/discount-white.svg" name="Promote" />
        </li>
        <li className="nav__item">
          <MenuLink to="/" defIcon="/assets/message.svg" activeIcon="/assets/message-white.svg" name="Help" />
        </li>
      </ul>
    </nav>
  );
};
