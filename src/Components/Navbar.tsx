import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Utils";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const SignOutHandler = () => {
    setUser("");
    localStorage.removeItem("User");
    setShowMenu(false);
  };
  return (
    <Nav>
      <Logo onClick={() => history.push("/")}>Currency Converter</Logo>
      <NavGroup>
        <NavItem onClick={() => history.push("/")}>Home</NavItem>
        <NavItem onClick={SignOutHandler}>Logout</NavItem>

        {!showMenu && (
          <MenuBtn
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            ☰
          </MenuBtn>
        )}
      </NavGroup>

      {showMenu && (
        <Menu>
          <MenuBtn
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            X
          </MenuBtn>
          <MenuItem
            onClick={() => {
              history.push("/");
              setShowMenu(false);
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              SignOutHandler();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  height: 70px;
  z-index: 2000;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`;

const MenuItem = styled.a`
  margin: 1rem;
  color: #6c6c6c;
  font-weight: 600;
  font-size: 20px;
`;

const Menu = styled.div`
  z-index: 100;
  width: 200px;
  right: 0;
  top: 0;
  height: 100vh;
  position: fixed;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  background: #cbcbcb;
  text-align: left;
  @media (min-width: 800px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  text-align: end;
  outline: none;
  border: none;
  background: none;
  color: #6c6c6c;
  font-weight: 600;
  @media (min-width: 800px) {
    display: none;
  }
  font-weight: 600;
  font-size: 32px;
`;

const Logo = styled.div`
  font-family: cursive;
  color: #6c6c6c;
  font-size: 2rem;
  cursor: default;
`;

const NavGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  color: #6c6c6c;
`;

const NavItem = styled.a`
  margin: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;
