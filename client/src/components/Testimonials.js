import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import avatar3 from "../assets/avatar3.jpeg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
            It was very good experience.Hodophile travel helps me to complete this trip smoothly..Thank you hodophile.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            Thanks to hodophile for providing all the details on time and for all the arrangements.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar3} alt="" />
            </div>
            <p>
            Had a great trip with breakbag holidays and thank you hodophile for assistance
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #4c6c88, #577c9c, #2b3e4e);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    // margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 0.5rem;
    ${TitleStyles};
    .title {
      // position: absolute;
      // top: -1rem;
      // left: 25%;
      // padding: 0 2rem;
      // background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: white;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;