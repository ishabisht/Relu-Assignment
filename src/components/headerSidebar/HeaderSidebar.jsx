import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faSliders,
    faUserCheck,
    faHome,
    faBell,
    faHeart,
    faEnvelope,
    faWallet,
    faUser,
    faCogs,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const HeaderSidebar = ({ activeMenu }) => {
    const navigate = useNavigate();
    const menuItems = [
        { label: 'Home', icon: faHome },
        { label: 'Notifications', icon: faBell },
        { label: 'Shop', icon: faHeart },
        { label: 'Conversation', icon: faEnvelope },
        { label: 'Wallet', icon: faWallet },
        { label: 'Subscription', icon: faUserCheck },
        { label: 'My Profile', icon: faUser },
        { label: 'Settings', icon: faCogs },
    ];

    return (
        <>
            {/* Header */}
            <header className="flex items-center justify-between p-4 z-10">
                <div
                    className="flex items-center justify-center w-1/5 h-20 bg-white text-black text-3xl font-normal shadow-md rounded-md pr-28"
                    style={{ fontFamily: 'Mongolian Baiti' }}
                >
                    LOGO
                </div>
                <div className="flex-1 flex items-center justify-center h-20 bg-white px-4 mx-8 rounded-md shadow-md">
                    <FontAwesomeIcon icon={faSearch} className="text-black text-lg ml-8" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="flex-1 bg-transparent outline-none text-gray-600 ml-2"
                    />
                    <button className="flex items-center gap-2 text-black text-sm mr-8">
                        <FontAwesomeIcon icon={faSliders} />
                        <span>Filters</span>
                    </button>
                </div>
                <div className="flex items-center justify-end w-1/5 h-20">
                    <button className="w-full h-full bg-[#88C2BB] text-white text-xl rounded-md hover:bg-[#0EC297] transition">
                        Become a Seller
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <aside className="w-1/5 flex flex-col h-[72%] bg-white shadow-md rounded-md justify-between fixed mt-36">
                <div className="mt-4">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-6 px-16 py-2 text-sm ${activeMenu === item.label
                                    ? 'text-black font-bold border-l-4 border-[#0EC297]'
                                    : 'text-gray-600 hover:font-bold hover:text-black hover:border-l-4 hover:border-[#0EC297]'
                                } transition-all`}
                        >
                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="px-16 mt-20">
                    <div className="flex items-center gap-5 py-4 text-[#0EC297]">
                        <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
                        <button onClick={() => doSignOut().then(() => navigate('/login'))}>
                            Log out
                        </button>
                    </div>
                </div>
                <footer className="h-16 bg-[#f5f5f5] flex items-center justify-center mt-7">
                    <p className="text-sm text-gray-500 text-center">
                        2024 © Picture Bar <br /> Developed by Isha
                    </p>
                </footer>
            </aside>
        </>
    );
};

export default HeaderSidebar;
