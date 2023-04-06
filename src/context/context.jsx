import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  }

  const value = {
    sidebarOpened,
    toggleSidebar,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
