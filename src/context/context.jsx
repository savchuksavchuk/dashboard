import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  useEffect(() => {
    const body = document.querySelector('.body');

    if (sidebarOpened) {
      body.classList.add(".body--with-menu");
    } else {
      body.classList.remove(".body--with-menu");
    }
  }, [sidebarOpened])

  const value = {
    sidebarOpened,
    toggleSidebar,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
