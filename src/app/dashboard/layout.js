"use client";
import React from "react";
import "./dashboard.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlinePersonOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";

import { MdAnalytics } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const sidebarData = [
  {
    icon: <RiHome5Line />,
    text: "Dashboard",
  },
  {
    icon: <IoDocumentText />,
    text: "Content",
  },
  {
    icon: <MdOutlinePersonOutline />,
    text: "Team",
  },
  {
    icon: <HiOutlineDesktopComputer />,
    text: "Dashboard",
  },
  {
    icon: <MdAnalytics />,
    text: "Dashboard",
  },
  {
    icon: <MdOutlineSmartDisplay />,
    text: "Dashboard",
  },
  {
    icon: <MdNotificationsNone />,
    text: "Dashboard",
  },
  {
    icon: <IoSettingsOutline />,
    text: "Dashboard",
  },
];

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="options">
          {sidebarData.map((i) => (
            <div className="option">
              {i.icon}
              <p> {i.text} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="heading">
        <div className="input">
          <CiSearch size={20} color="#CECECE" />
          <input type="text" placeholder="Search" className="search" />
        </div>
        <div className="right-box">
          <div className="date-box">
            <p>11-10-2022</p>
            <MdOutlineDateRange size={20} color="#7750F1" />
          </div>
          <div className="user-details">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoR4a0mpEW25DOHL7n6U-Q8K3AmKCMjQ0I_ns0J5JMA&s" />
            <div>
              <p>Welcome back</p>
              <h3>Akshita Patel</h3>
            </div>
            <div className="icon">
              <IoIosArrowDown size={15} />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
