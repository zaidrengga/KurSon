import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHouse, FaTeamspeak } from "react-icons/fa6";
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { BsBookHalf } from "react-icons/bs";

const navigation = [
    {
        icon: <FaHouse />,
        name: 'Dashboard',
        href: '/dashboard',
        current: true
    },
    {
        icon: <BsBookHalf />,
        name: 'Book',
        href: '#',
        current: false
    },
    {
        icon: <FaHouse />,
        name: 'Layanan',
        href: '#',
        current: false
    },
    {
        icon: <FaTeamspeak />,
        name: 'Team',
        href: '#',
        current: false
    },
]

export default function NavbarDashboard() {
    const [isOpen, setIsOpen] = useState(false)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className="bg-indigo-950 sticky top-0 z-50 sm:max-w-[12rem]  w-full sm:h-screen h-full">
            <div className="flex flex-col align-center h-full px-2 sm:py-4 py-2">
                <div className="flex align-center">
                    <img src="/pngwing.com.png" alt="" className="h-10 w-10" />
                    <p className="text-white text-2xl font-bold">KurSon</p>

                    <button className="ml-auto sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoIosClose className="text-white text-2xl" /> : <IoIosMenu className="text-white text-2xl" />}
                    </button>
                </div>

                <ul className={`flex flex-col mt-4 space-y-2 sm:block hidden`}>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(item.current ? 'bg-indigo-900' : '', 'flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md')}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.icon}
                            <p className="">{item.name}</p>
                        </Link>
                    ))}

                    <div className="border-t border-indigo-700 py-2">
                        <Link to="/" className="flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md ">
                            <FaHouse />
                            <p className="">Logout</p>
                        </Link>
                    </div>
                </ul>

                <ul className={`flex flex-col mt-4 space-y-2 sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md">
                            {item.icon}
                            <p className="">{item.name}</p>
                        </Link>
                    ))}

                    <div className="border-t border-indigo-900 py-2">
                        <Link to="/" className="flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md ">
                            <FaHouse />
                            <p className="">Logout</p>
                        </Link>
                    </div>

                    <div className="mt-auto flex align-center border-t border-indigo-900 py-2">
                        <div className="w-10 h-10 bg-indigo-400 rounded-lg flex justify-center align-center">
                            <p className="">img</p>
                        </div>
                        <div className="ml-2">
                            <p className="text-white font-bold text-sm">User Name</p>
                            <p className="text-white text-xs">UserEmail@gmail.com</p>
                        </div>
                    </div>
                </ul>

                <div className="mt-auto align-center border-t border-indigo-900 py-2 sm:flex hidden">
                    <div className="w-10 h-10 bg-indigo-400 rounded-lg flex justify-center align-center">
                        <p className="">img</p>
                    </div>
                    <div className="ml-2">
                        <p className="text-white font-bold text-sm">User Name</p>
                        <p className="text-white text-xs">UserEmail@gmail.com</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}