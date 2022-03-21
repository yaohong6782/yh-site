import React, { useState } from "react";
import "./Header.css";
import Web from "./web/Web";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
      setOpenMenu(!openMenu)
  }

  return (
    <div className="header">
      <div className="logo">YH</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setOpenMenu(showMenu)}>
            <i class ="fi fi-rr-list menu-icon"></i>
          </div>
        </div>
        {/* {openMenu && <Mobile openMenu={openMenu} setOpenMenu={setOpenMenu}/>} */}
      </div>
    </div>
  );
};
export default Header;
