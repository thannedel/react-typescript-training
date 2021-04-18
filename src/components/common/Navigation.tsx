import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Navigation = () => {
  
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return(
    <div>
      <Navbar color="faded" light style={{backgroundColor: '#f1f1f1'}}>
        <NavbarBrand tag={Link} to="/" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/house">House</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;




  

 