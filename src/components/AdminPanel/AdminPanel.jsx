import { CustomersPage } from "../../pages/CustomersPage/CustomersPage";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import "./AdminPanel.scss";

export const AdminPanel = () => {
  return (
    <div className="adminPanel">
      <div className="adminPanel__sidebar">
        <Sidebar />
      </div>
      <div className="adminPanel__content">
        <Topbar />
        <CustomersPage />
      </div>
    </div>
  );
};
