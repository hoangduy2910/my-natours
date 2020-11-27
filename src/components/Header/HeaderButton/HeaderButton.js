import React from "react";
import styled from "styled-components";

const HeaderButtonStyled = styled.a`
  display: inline-block;
  background-color: #fff;
  color: #777;

  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  border-radius: 100px;

  transition: all .2s;
  position: relative;

  animation: moveInBottom 1s ease-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); 
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
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
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderButton = (props) => {
  return <HeaderButtonStyled>Discover our tours</HeaderButtonStyled>;
};

export default HeaderButton;
