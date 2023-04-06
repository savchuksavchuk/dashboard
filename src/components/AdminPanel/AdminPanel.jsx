import { useContext, useState } from "react";
import { CustomersPage } from "../../pages/CustomersPage/CustomersPage";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import "./AdminPanel.scss";
import classNames from "classnames";
import { Context } from "../../context/context";

export const AdminPanel = () => {
  const { sidebarOpened } = useContext(Context);

  return (
    <div className="adminPanel">
      <div
        className={classNames("adminPanel__sidebar", {
          "adminPanel__sidebar--opened": sidebarOpened,
        })}>
        <Sidebar />
      </div>
      <div className="adminPanel__content">
        <div className="adminPanel__content-wrapper">
          <Topbar />
          <CustomersPage />
        </div>
      </div>
    </div>
  );
};
