import './style/homeStyle.css'
import { ImageList } from '../assets/imageList'

function HomePage() {

    return(
        <>
            <section className='homePage'>
                <div className="homeContent">
                    <div className="homeInfo">
                        <h1>Selamat datang di website KAMI</h1>
                        <p>Selamat datang di Nama Website, Kami menawarkan berbagai kursus online yang dirancang 
                            untuk membantu Anda menguasai keterampilan baru. Selain kelas, kami juga menyediakan
                            produk digital seperti e-book, template, dan alat bantu belajar yang dapat mendukung 
                            perjalanan pendidikan Anda.</p>
                        <div className="btnHome">
                            <a href=''>Berlangganan</a>
                        </div>
                    </div>
                    
                    <div className="homeVector">
                        <img src={ImageList.vector1} alt="" />
                    </div>
                    
                </div>
            </section>

            <section className="homeAbout">
                <div className="homeAboutContent"></div>
                    <div className="cardHomeAbout">
                        <div className="cardHomeAboutContent">
                            <div className='homeAboutVector'>
                                <img src={ImageList.vector2} alt="" />
                            </div>
                            <p>Menydiakan berbagai macam kelas online</p>
                        </div>
                        <div className="cardHomeAboutContent">
                            <div className='homeAboutVector'>
                                <img src={ImageList.vector2} alt="" />
                            </div>
                            <p>Menydiakan berbagai macam Produk Digital</p>
                        </div>
                        <div className="cardHomeAboutContent">
                            <div className='homeAboutVector'>
                                <img src={ImageList.vector2} alt="" />
                            </div>
                            <p>Berlangganan dan dapatankan semua kelasnya</p>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default HomePage