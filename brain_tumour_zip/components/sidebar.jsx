'use client'

import { HistoryOutlined, HomeOutlined, MedicineBoxOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = ({route}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  //eLliM9FfIqytNSOl
    const menuItems = [
      { icon: <HomeOutlined/>, label: "Dashboard", route: '/dashboard' },
      { icon: <UserOutlined/>, label: "Profile", route: '/profile' },
      { icon: <HistoryOutlined/>, label: "History", route: '/history' },
      { icon: <MedicineBoxOutlined/>, label: "Diagonosis", route: '/diagonosis' },
    ];
  
    return (
      <div
        className={`flex flex-col bg-gray-800 min-h-screen ${
          isOpen ? "w-64" : "w-16"
        } transition-all duration-300`}
      >
        <button
          className="text-white p-2 mt-4  focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </button>
        <nav className="flex flex-col mt-4 lg:mt-20 gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={()=>router.push(item.route)}
              className={`flex items-center p-2 hover:bg-gray-700 cursor-pointer ${route === item.route && 'bg-gray-700'}`}
            >
              <span className="text-2xl">{item.icon}</span>
              {isOpen && <span className="ml-4 text-sm font-medium">{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  