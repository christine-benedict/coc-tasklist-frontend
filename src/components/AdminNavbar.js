import React, {Component} from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

class AdminNavbar extends Component{
  render(){
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Coordinator Control Panel
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullLeft>
            <NavItem eventKey={1} href="/">
              Create New Tasks
            </NavItem>
            <NavItem eventKey={2} href="/tasks">
              List All Tasks
            </NavItem>
            <NavDropdown eventKey={3} title="Departments" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/admin">Admin</MenuItem>
              <MenuItem eventKey={3.2} href="/maint">Maintenance</MenuItem>
              <MenuItem eventKey={3.3} href="/ops">Operations</MenuItem>
              <MenuItem eventKey={3.4}>Another Department</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default AdminNavbar
