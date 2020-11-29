import React from "react";
import styled from "styled-components";

import * as colors from "../../../colors";

const HeaderButtonStyled = styled.a`
  font-size: 1.6rem;
  display: inline-block;
  background-color: ${colors.white};
  color: ${colors.greyDark};

  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  border-radius: 10rem;

  transition: all .2s;
  position: relative;

  animation: moveInBottom 1s ease-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); 
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.2); 
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .2s;
  }

  &:hover::after {
    transform: scaleX(1.5) scaleY(1.7);
    opacity: 0;
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderButton = (props) => {
  return <HeaderButtonStyled className="btn--white">Discover our tours</HeaderButtonStyled>;
};

export default HeaderButton;
