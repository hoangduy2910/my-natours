import React from "react";
import styled from "styled-components";

import * as colors from "../../../colors";

const AboutSectionStyled = styled.section`
  background-color: ${colors.greyLight};
  padding: 25rem 0;
  margin-top: -20vh;

  .section__about-box {
    text-align: center;
  }

  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
      to right,
      ${colors.primaryLight},
      ${colors.primaryDark}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;

    &:hover {
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: 0.5rem 1rem 2rem rgba(${colors.black}, 0.2);
    }
  }
`;

const AboutSection = (props) => {
  return (
    <AboutSectionStyled className="section__about">
      <div className="section__about-box">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
    </AboutSectionStyled>
  );
};

export default AboutSection;
