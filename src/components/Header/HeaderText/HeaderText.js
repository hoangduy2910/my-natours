import React from "react";
import styled from "styled-components";

import * as colors from "../../../colors";

import HeaderButton from "../HeaderButton/HeaderButton";

const HeaderTextStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .heading-primary {
    color: ${colors.white};
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;

    &--main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3.5rem;

      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }

    &--sub {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.75rem;

      /* animation-name: moveInRight;
      animation-duration: 1s;
      animation-timing-function: ease-out; */

      animation: moveInRight 1s ease-out;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const HeaderText = (props) => {
  return (
    <HeaderTextStyled className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Outdoors</span>
        <span className="heading-primary--sub">
          is where life happens
        </span>
      </h1>
      <HeaderButton />
    </HeaderTextStyled>
  );
};

export default HeaderText;
