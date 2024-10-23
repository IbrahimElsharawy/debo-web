import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png'
import { VscDashboard } from "react-icons/vsc";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import depoWeb from '../../assets/depo.jpg'

const SideBar = () => {
  const menus = [
    { name: "Add Employees", link: "/", icon:RiUser3Fill },
    {name:"Dashboard", link:"/dashboard", icon:VscDashboard },
    {name:"Teams", link:"/teams", icon:IoIosPeople},
    {name:"Settings", link:"/settings", icon:MdOutlineSettings},
    {name:"Not_found", link:"/not-found", icon:IoIosPeople}


  ];

  const [open, setOpen] = useState(true); // Sidebar is initially closed on smaller screens
  const location = useLocation();

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={` min-h-screen ${
          open ? "w-64" : "w-16"
        } duration-300 px-4 fixed top-0 left-0 z-40 transition-all`}
        style={{backgroundColor:"#026980", color:"white"}}
      >
        {/* Logo and Menu Icon */}
        <div className=" flex items-center h-32 justify-between">
          <div className={`${open ? "mr-4" : "hidden"}`}>
            <img className="w-[80px] h-[80px] object-contain " src={depoWeb} alt="logo" />
          </div>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            style={{ color: "white" }}
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Menu Links */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md ${
                location.pathname === menu.link ? "" : ""
              }`}
            >
              <div className="">
                {React.createElement(menu.icon, { size: 20 })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              {/* Tooltip for closed sidebar */}
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48  font-semibold whitespace-pre  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>

        
      </div>




      {/* Overlay for mobile screens */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-30 ${
          open ? "block" : "hidden"
        } sm:hidden`} // Show overlay on mobile only
        onClick={() => setOpen(false)} // Close sidebar on overlay click
      ></div>
    </div>
  );
};

export default SideBar;
