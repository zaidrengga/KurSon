import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Components Content
import NavbarComponents from "./components/NavbarComponents"
import FooterComponents from "./components/FooterComponents"
import HomePage from "./pages/HomePage"
import ProdukPage from "./pages/ProdukPage"
import AboutPage from "./pages/AboutPage"
import LayananPage from "./pages/LayananPage"
import LoginPage from "./pages/login-register/LoginPage"
import RegisterPage from "./pages/login-register/RegisterPage"
import Dashboard from "./dashboard/Dashboard"
import ProdukPageDashboard from "./dashboard/pages/ProdukPageDashboard"
import HomeDashboard from "./dashboard/pages/HomeDashboard"

function App() {
  return (
    <>

      <Router>
        <NavbarComponents />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk" element={<ProdukPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/dashboard" element={<Dashboard />}> 
            <Route index element={<HomeDashboard />} />
            <Route path="/dashboard/produk" element={<ProdukPageDashboard />} />
          </Route>


          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <FooterComponents />
      </Router>

    </>
  )
}


export default App
