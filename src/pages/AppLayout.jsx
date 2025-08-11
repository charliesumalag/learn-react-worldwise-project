import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";


export default function AppLayout() {
  return (
    <div>
        <PageNav />
        <Outlet />
    </div>
  )
}
