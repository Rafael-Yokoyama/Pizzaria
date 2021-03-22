import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import img from "../../img/8.jpg";
import img1 from "../../img/pizza1.png";
import img2 from "../../img/pizza2.png";
import img3 from "../../img/pizza3.png";
const Container = styled.div`
  background-color: var(--dark);
  padding: 80px 20px;
  width: 100%;

  .padding {
    padding: 40px 0;
  }
  .title {
    width: 100%;
    text-align: center;
    padding: 0 15px;
    font-size: 34px;
  }
  .title::before {
    content: attr(data-title);
    display: block;
    font-size: 20px;
    font-weight: 400px;
    color: var(--main-color);
    font-family: var(--cursive-font);
  }

  p {
    color: var(--white-light);
    text-align: center;
    font-size: 16px;
    margin: 0 0 15px;
  }
  h3 {
    text-align: center;
    font-size: 20px;
    text-transform: capitalize;
  }
  .menu {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
  }
  .menu::after {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0;
    content: "";
    border: 2.5px dashed var(--dark-light);
  }
  .menu-item {
    cursor: pointer;
    align-items: center;
    display: flex;
  }
  .menu-item img {
    border-radius: 50%;
    max-width: 80px;
    margin-right: 40px;
    cursor: pointer;
  }
  .menu-price {
    cursor: pointer;

    color: var(--main-color);
  }
  .menu:hover .menu-price {
    color: var(--white);
  }
  .menu:hover .menu-item h3 {
    color: var(--main-color);
  }
  .menu-overflow {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 350px;
    &::-webkit-scrollbar {
      width: 1.2px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--white-light);
      border-radius: 15px;
    }
  }
`;

const Menu = () => {
  return (
    <Container id="menu">
      <div className="container">
        <div className="row padding">
          <div data-title=" News" className="title">
            <h2>Menu</h2>
          </div>
        </div>
        <div className="row">
          <div className="menu-overflow">
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <div className="menu">
                <div className="menu-item">
                  <img src={img1}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$40.00</div>
              </div>
              <div className="menu">
                <div className="menu-item">
                  <img src={img2}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$45.00</div>
              </div>
              <div className="menu">
                <div className="menu-item">
                  <img src={img3}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$35.00</div>
              </div>
              <div className="menu">
                <div className="menu-item">
                  <img src={img1}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$40.00</div>
              </div>
              <div className="menu">
                <div className="menu-item">
                  <img src={img2}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$45.00</div>
              </div>
              <div className="menu">
                <div className="menu-item">
                  <img src={img3}></img>
                  <h3>Pizza Lorem </h3>
                </div>
                <div className="menu-price">$35.00</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row "></div>
      </div>
    </Container>
  );
};

export default Menu;
