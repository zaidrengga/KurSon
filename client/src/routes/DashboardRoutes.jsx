import { Routes, Route } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import DashboardPage from "../dashboard/dashboarPages/DashboardPage";

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardPage />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes