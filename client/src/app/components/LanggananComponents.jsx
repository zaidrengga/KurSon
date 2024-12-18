import './style/langgananStyle.css'
import { BsCheckCircle } from "react-icons/bs";

function LanggananComponents() {
    return (
       <section className="langganan">
            <h1>Paket Berlangganan</h1>
            <div className="langgananContent">
                <div className="langgananCard">
                    <h1>Paket 1 Bulan</h1>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Nikmati fitur berlangganan selama 1 bulan</p>
                    </div>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Akses semua kelas dengan kategori sesuai yang anda pilih</p>
                    </div>
                    <h2>Rp. 100.000</h2>
                    <div className="btnLangganan">
                        <a href="">Berangganan</a>
                    </div>
                </div>

                <div className="langgananCard">
                    <h1>Paket 3 Bulan</h1>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Nikmati fitur berlangganan selama 3 bulan</p>
                    </div>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Akses semua kelas dengan kategori sesuai yang anda pilih</p>
                    </div>
                    <h2>Rp. 300.000</h2>
                    <div className="btnLangganan">
                        <a href="">Berlangganan</a>
                    </div>
                </div>

                <div className="langgananCard">
                    <h1>Paket 6 Bulan</h1>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Nikmati fitur berlangganan selama 6 bulan</p>
                    </div>
                    <div className="langgananInfo">
                        <span><BsCheckCircle /></span><p>Akses semua kelas dengan kategori sesuai yang anda pilih</p>
                    </div>
                    <h2>Rp. 600.000</h2>
                    <div className="btnLangganan">
                        <a href="">Berlangganan</a>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default LanggananComponents