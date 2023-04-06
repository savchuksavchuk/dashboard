import "./User.scss";

export const User = () => {
  return (
    <div className="user">
      <img src="./assets/user-photo.jpg" alt="user" className="user__photo" />
      <div className="user__info">
        <span className="user__name">Evano</span>
        <span className="user__position">Project Manager</span>
      </div>
    </div>
  );
};
