import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarItems';
 
const Navbar = () => {
  return (
    <div className="navbar"> 
      <Nav>
        <NavMenu> 
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/javascript">
            JavaScript
          </NavLink>
          <NavLink to="/react">
            React.js
          </NavLink>
          <NavLink to="/node">
            Node.js
          </NavLink>
          <NavLink to="dsa">
            DSA
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;