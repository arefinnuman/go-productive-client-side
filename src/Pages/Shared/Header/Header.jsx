import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            GO Productive
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/add-task">
          <Navbar.Link active={true}>Add Task</Navbar.Link>
        </Link>
        <Link to="/my-task">
          <Navbar.Link>My Task</Navbar.Link>
        </Link>
        <Link to="/completed-task">
          <Navbar.Link>Completed Tasks</Navbar.Link>
        </Link>
        <Link to="/about">
          <Navbar.Link>About</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
