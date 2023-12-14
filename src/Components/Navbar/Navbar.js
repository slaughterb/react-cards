import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarItems';
 
const Navbar = () => {
  return (
    <div className="navbar"> 
      <Nav>
        <Bars />
        <NavMenu> 
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/javascript">
            JavaScript
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;