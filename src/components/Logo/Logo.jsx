import "./Logo.scss";

export const Logo = () => {
  return (
    <div className="logo">
      <img src="./assets/logo.svg" alt="logo" className="logo__img" />
      <span className="logo__name">
        Dashboard
        <span className="logo__version">v.01</span>
      </span>
    </div>
  );
};
