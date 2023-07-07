import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SideMenu from '../../components/SideMenu';

import './Heade.css';

function Header() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header__menuIcon">
        <Link to="#" onClick={handleMenuClick}>
          <MenuOutlined />
        </Link>
      </div>
      <Link to="/" onClick={closeSideMenu}>
        <img
          className="header__logo"
          src="https://play-lh.googleusercontent.com/0AfL8mE9jD0raR7RUoAPHmnZQvjnLa8_GO2BPM8G5lQkTWOM8G99x_59OqOWLVHFoRo=w240-h480-rw"
          alt="Amazon Logo"
        />
      </Link>
      {isSideMenuOpen && (
        <div className="header__sideMenuWrapper">
          <div className="header__sideMenu">
            <SideMenu onClose={closeSideMenu} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
