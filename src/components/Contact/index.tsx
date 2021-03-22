import React from "react";

import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagram,
  FaArrowAltCircleUp,
} from "react-icons/fa";

import styled from "styled-components";
const Footer = styled.footer`
  background: black;
  background-size: cover;
  background-repeat: no-repeat;

  opacity: 0.9;
  padding: 80px 0;
  .footer-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 5px;
  }
  h3 {
    text-align: center;
    font-size: 22px;
    text-transform: capitalize;
    margin: 0 0 15px;
  }
  p {
    color: var(--white-light);
    line-height: 30px;
  }
  .copyright {
    color: var(--white-light);
    width: 100%;

    font-size: 15px;
    text-align: center;
    border-top: 1px solid var(--white-light);
    margin: 0 auto;
  }
  .copyright p {
    padding-top: 20px;
    margin-bottom: -30px;
  }
  a {
    color: var(--main-color);
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .social p {
    cursor: pointer;
    color: var(--main-color);
    margin: 20px 5px;
    &:hover {
      color: var(--white-light);
    }
    a {
      color: var(--white-light);
      &:hover {
        color: var(--main-color);
      }
    }
  }
`;

const Contact = () => {
  return (
    <Footer className="footer" id="contact">
      <div className="container ">
        <div className="row ">
          <div className="footer-text">
            <h3>our location</h3>
            <p>
              loren loren,loren 12
              <br /> New lorem 999
            </p>
          </div>
          <div className="footer-text">
            <h3> openning</h3>
            <p>
              Wednesday
              <br /> 7:00 pm - 11:00 pm
            </p>
          </div>
          <div className="footer-text">
            <h3> Delivery</h3>
            <p>
              0000-0000
              <br /> 11:00 pm
            </p>
          </div>

          <div className="footer-text">
            <h3> Contact</h3>
            <p>9999-999</p>
            <p>loren@gmail.com</p>
            <div className="social">
              <p>
                {" "}
                <FaFacebookSquare size="25" />
              </p>
              <p>
                {" "}
                <FaGithubSquare size="25" />
              </p>
              <p>
                {" "}
                <FaInstagram size="25" />
              </p>

              <p>
                {" "}
                <a href="#home">
                  {" "}
                  <FaArrowAltCircleUp size="25" />
                </a>
              </p>
            </div>
          </div>

          <div className="copyright">
            <p>
              {" "}
              © 2021 Designed by{" "}
              <a
                href="https://www.instagram.com/rafael.yokoyama99/"
                target="_blank"
              >
                Rafael Yokoyama
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Contact;
