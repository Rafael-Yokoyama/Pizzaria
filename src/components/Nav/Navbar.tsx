import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  background: var(--dark);
  border-bottom: 5px solid var(--main-color);

  .logo {
    background: var(--dark);

    z-index: -20;
    color: var(--white);
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Logo {
    text-transform: capitalize;
    font-size: 28px;
    font-family: "Dancing Script", cursive;
    margin: 20px 30px;
    display: flex;
    color: var(--main-color);
    justify-content: start;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="logo">
          <div className="Logo">PizzariaYo</div>
          <Burger />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
