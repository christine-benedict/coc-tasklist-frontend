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
            <NavItem eventKey={1} href="/tasks">
              List All Tasks
            </NavItem>
            <NavDropdown eventKey={2} title="Departments" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1} href="/admin">Admin</MenuItem>
              <MenuItem eventKey={2.2} href="/maintenance">Maintenance</MenuItem>
              <MenuItem eventKey={2.3} href="/operations">Operations</MenuItem>
              <MenuItem eventKey={2.4}>Another Department</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default AdminNavbar
