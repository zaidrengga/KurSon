import ProdukEBook from "../assets/ProdukEBook";
import './style/produkComponentStyle.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

function ProdukComponents() {

    const [isOpen, setIsOpen] = useState([]);
    const [close, setClose] = useState(false);

    const handleClick = (Produk) => {
        setIsOpen([{ ...Produk }])
        setClose(true)
    }

    return (
        <>
            {
                close ?
                    <div className="produkIsOpen">
                        <button onClick={() => setClose(false)}><IoMdClose /></button>
                        {
                            isOpen.map((item) => (
                                <div className="produkCardIsOpen" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="produkIsOpenInfo">
                                        <h1>{item.title}</h1>
                                        <p>{item.price}</p>
                                        <a href={item.file}>Beli</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : null
            }

            <div className="produkContent">
                {
                    ProdukEBook.map((item) => (
                        <div className="produkCard" key={item.id} onClick={() => handleClick(item)}>
                            <img src={item.image} alt="" />
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ProdukComponents;