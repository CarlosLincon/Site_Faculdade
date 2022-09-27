import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import styles from "./PaginaPadrao.module.css";



export default function PaginaPadrao() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <div className={styles.container}>

      <Outlet />

      {/* {children} */}

    </div>
  )
}