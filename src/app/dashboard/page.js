import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import "./dashboard.css";

import { IoSettingsOutline } from "react-icons/io5";
import {
  MdAnalytics,
  MdNotificationsNone,
  MdOutlineSmartDisplay,
} from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";

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

const Dashboard = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="options">
          {sidebarData.map((i, ind) => (
            <div key={ind} className={`option ${ind == 1 ? "active" : ""}`}>
              {i.icon}
              <p> {i.text} </p>
            </div>
          ))}
        </div>

        <div className="contact">
          <CiHeadphones />
          <p>Contact Support</p>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default Dashboard;
