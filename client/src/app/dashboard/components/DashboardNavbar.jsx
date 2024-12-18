import { Link } from "react-router-dom"
import './dashCompStyle/dashboardNavbar.css'
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function DashboardNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="dashNav">
            <div className="logoDashboard">

                <div className="navTogelDash" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
                <h1>Dashboard</h1>
            <div className={isOpen ? "dashNavContent active" : "dashNavContent"}>
                <div className="dashMenuNav">
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/produk">Produk</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/langganan">Kelas</Link>
                        </li>
                    </ul>
                </div>

                <div className="dashLogout">
                    <button type="submit"><Link to="/">Logout</Link></button>
                </div>
            </div>
        </nav>
    )
}