import { FaWhatsapp, FaInstagram, FaTiktok, } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io"
import './style/footerStyle.css'
import { useLocation } from "react-router-dom";

function FooterComponents() {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/dashboard' || location.pathname === '/dashboard/produk') {
        return null;
    }
    return (
        <footer className='footer'>
            <div className="footerContent">
                <div className="footerLogo">
                    <h1>Web<span>Name</span></h1>
                    <div className="footerSocial">
                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                        <a href="https://www.whatsapp.com/"><FaWhatsapp /></a>
                        <a href="https://www.tiktok.com/"><FaTiktok /></a>
                    </div>
                </div>

                <span className="garisFooter"></span>

                <div className="footerInfo">
                    <div className="footerContact">
                        <p>Hubungi Kami</p>
                        <a href=""><IoIosCall /> : (+62) 123456789</a>
                        <a href=""><IoMdMail /> : 1YhG0@example.com</a>
                    </div>

                    <span className="garisFooter"></span>

                    <div className="footerMenu">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Layanan</a>
                            </li>
                            <li>
                                <a href="">Produk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footerCopyright">
                <p>Copyright &copy; 2023 WebName</p>
            </div>
        </footer>
    )
}

export default FooterComponents