import "./BurgerButton.scss";

export const BurgerButton = ({ src, onPress }) => {
  return (
    <button type="button" className="burgerButton" onClick={() => onPress()}>
      <img src={src} alt="" className="burgerButton__icon" />
    </button>
  );
};
