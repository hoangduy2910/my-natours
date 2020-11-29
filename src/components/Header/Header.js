import React from "react";
import styled from "styled-components";

import headerBackgroundImage from "../../assets/images/hero.jpg";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

const HeaderStyled = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(${headerBackgroundImage});
  background-size: cover;
  background-position: top;
  position: relative;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const Header = (props) => {
  return (
    <HeaderStyled className="header">
      <HeaderLogo />
      <HeaderText />
    </HeaderStyled>
  );
};

export default Header;
