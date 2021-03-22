import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

import { GiFullPizza } from "react-icons/gi";
const StyledBurger = styled.div<OpenPropsP>`
  cursor: pointer;
  position: fixed;
  top: 5px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
  }
  div {
    align-items: center;
  }
  .pizza {
    transform-origin: center;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-name: pizza-animation;
  }
  @keyframes pizza-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface OpenPropsP {
  open?: string;
}

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger onClick={() => setOpen(!open)}>
        <div>
          {" "}
          <GiFullPizza className="pizza" size={"40px"} color={"#eaa023"} />{" "}
        </div>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
