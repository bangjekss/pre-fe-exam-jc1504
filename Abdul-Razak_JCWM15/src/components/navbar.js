import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="px-5"
          light
          expand="md"
          style={{ backgroundColor: 'rgba(255, 202, 0,1)' }}
        >
          <NavbarBrand href="/">Remed FrontEnd</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>Soal 1</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/clue">
                  <NavLink>Petunjuk</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/database">
                  <NavLink>Database</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
