import React from "react";
import styled from "styled-components";

import headerLogoImage from "../../../assets/images/logo-white.png";

const HeaderLogoStyled = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;

  img {
    height: 3.5rem;
  }
`;

const HeaderLogo = (props) => {
  return (
    <HeaderLogoStyled className="header__logo-box">
      <img className="header__logo" src={headerLogoImage} alt="Logo" />
    </HeaderLogoStyled>
  );
};

export default HeaderLogo;
