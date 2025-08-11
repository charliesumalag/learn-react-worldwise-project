// import Map from "../components/Map";
// import Sidebar from "../components/Sidebar";
// import User from "../components/User";

import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <p>App</p>
      this is applayout
    </div>
  );
}

export default AppLayout;
