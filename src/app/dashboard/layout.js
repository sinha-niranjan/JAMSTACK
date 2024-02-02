"use client";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import "./dashboard.css";


 

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="heading">
        <div className="input">
          <CiSearch size={20} color="#a0a3bd" />
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
