import React from "react";
import styled from "styled-components";

import HeaderButton from "../HeaderButton/HeaderButton";

const HeaderTextStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .header__heading-primary {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;

    &--main {
      display: block;
      font-size: 60px;
      font-weight: 400;
      letter-spacing: 35px;

      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }

    &--sub {
      display: block;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 17.5px;

      /* animation-name: moveInRight;
      animation-duration: 1s;
      animation-timing-function: ease-out; */

      animation: moveInRight 1s ease-out;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(20px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-20px);
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
      <h1 className="header__heading-primary">
        <span className="header__heading-primary--main">Outdoors</span>
        <span className="header__heading-primary--sub">
          is where life happens
        </span>
      </h1>
      <HeaderButton />
    </HeaderTextStyled>
  );
};

export default HeaderText;
