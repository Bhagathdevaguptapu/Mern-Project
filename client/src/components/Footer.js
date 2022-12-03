import React from "react";
import styled from "styled-components";
import logo from "../assets/FoodYummy.png";
// import { AiFillInstagram } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
          The journey of a thousand miles begins with a single step.
          </p>
          <ul>
            {/* <li>
              <AiFillInstagram />
            </li> */}
            {/* <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li> */}
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            This website is dedicated to travel. The site may be focused on travel reviews, trip fares, hospitality, or a combination of both. Over 1.5 billion people book travel per year, 70% of which is done online.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+91 1231231231</p>
          <p>hodophile@gmail.com</p>
          <p>@hodophile</p>
          <p>KL University, Vijaywada, India</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
        <span>Copyright &copy; 2022 Hodophile</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #a2a38c, #f6ffcc);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    // display: flex;
    // list-style-type: none;
    // gap: 4vw;
    // margin-top: 2vw;
    li {
      padding: 0.8rem;
      // border-radius: 2rem;
      // background-color: white;
      // transition: 0.3s ease-in-out;
      // cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness invert(1);
    width: 5vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 150px) and (max-width: 720px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 1rem;
        width:7rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align:center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;