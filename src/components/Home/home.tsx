
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';

import img from "../../img/pizza.png";
import { Button } from "../Button";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;

  @keyframes zoomIn {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .min-vh-100 {
    flex-direction: column;
    padding: 240px 0px;
  }
  .home-bg {
    width: 100%;
    background-image: url(${img});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    animation: zoomIn 7s ease infinite;
    overflow: hidden;
  }
  .home-bg::before {
    content: "";
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    width: 100%;
    height: 100%;
  }

  .home-text {
    text-align: center;
    max-width: 700px;
    width: 100%;
    padding: 0 20px;
    margin: auto;
    z-index: 2;
  }
  .home-text p {
    color: var(--white-light);
  }
  h1 {
    font-family: var(--cursive-font);
    font-size: 60px;
  }
  h1 span {
    color: var(--main-color);
  }
`;

const Home = () => {
  return (
    <Container id="home">
      <div className="home-bg">
        <div className="container ">
          <div className="row min-vh-100 alc ">
            <div className="home-text">
            <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
 
              <h1> Pizzaria<span>Yo</span> Loren </h1>
            
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
            <Button>
              {" "}
              <div>
                {" "}
             
                <a href="#menu" className="btn">
                  {" "}
                  Our Menu
                </a>
              </div>
            </Button>
            </ScrollAnimation>
         
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
