import ImageAbout1 from "../assets/vector_1.png"
import ImageAbout2 from "../assets/vector-2.png"
import './style/aboutStyle.css'

function AboutPage() {
    return (
        <section className='aboutPage'>
            <h1>Tentang kami</h1>
            <div className="aboutContent">
                <img src={ImageAbout2} alt="" />
                <div className="aboutInfo">
                    <h2>Kelas online</h2>
                    <p>Kami Menyediakan berbagai kelas online untuk membantu Anda menguasai keterampilan baru yang Anda inginkan dan meningkatkan kemampuan Anda dalam bidang tertentu.</p>
                    <p>Berlangganan dan dapatkan semua akses ke kelas online yang anda inginkan dengan harga terjangkau</p>
                </div>
            </div>
            <div className="aboutContent aboutContent2">
                <div className="aboutInfo">
                    <h2>Produk digital</h2>
                    <p>Kami juga menyediakan berbagai produk digital seperti e-book, template, dan alat bantu belajar yang dapat mendukung perjalanan pendidikan Anda.</p>
                    <p>Pilih Produk sesuai dengan kebutuhan Anda dan dapatkan semua produk digital dengan harga terjangkau.</p>
                </div>
                <img src={ImageAbout1} alt="" />
            </div>
        </section>
    );
}

export default AboutPage