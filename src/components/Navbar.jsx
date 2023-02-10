import React, { useState } from "react";
import LOGO from ".././assets/logo.png";
import CLOGO from ".././assets/company_name.png";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
const Navbar = () => {
  const[search,setSearch]=useState('')
  return (
    <div className="navbar">
      <div className="nav-link-logo">
        <img src={LOGO} alt="" logo  />

        <div className="nav-search">
          <input type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <FaSearch className="nav-icon" />
        </div>
      </div>

      <div >
        <img src={CLOGO} alt="company_logo" />
      </div>
    </div>
  );
};

export default Navbar;
