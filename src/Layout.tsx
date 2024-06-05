import { Outlet } from "react-router-dom";
import { ActiveContext } from "./Context/context";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import AuthProvider from "./HOC/AuthProvider";
import styles from "./footer.module.scss";

const Layout = () => {
  const [isActive, setIsactive] = useState(false);
  return (
    <AuthProvider>
      <ActiveContext.Provider
        value={{ isActive: isActive, setIsactive: setIsactive }}
      >
        <Header />

        <Outlet />
        <footer className={styles.footer}>
          <span>©2022 Bookstore</span>
          <span>All rights reserved</span>
        </footer>
      </ActiveContext.Provider>
    </AuthProvider>
  );
};
export default Layout;
