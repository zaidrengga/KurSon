import DashboardNavbar from "./components/DashboardNavbar";
import { Outlet } from "react-router-dom";
import "./dasboardStyle/dashboard.css";

export default function Dashboard() {
    return (
        <section className="dashboard">
            <DashboardNavbar />
            <div className="dashContent"><Outlet/></div>
        </section>
    )
}