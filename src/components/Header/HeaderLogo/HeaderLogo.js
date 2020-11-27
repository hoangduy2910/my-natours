import React from "react";
import styled from "styled-components";

import headerLogoImage from "../../../assets/images/logo-white.png";

const HeaderLogoStyled = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;

  img {
    height: 35px;
  }
`;

const HeaderLogo = (props) => {
  return (
    <HeaderLogoStyled className="header__logo-box">
      <img src={headerLogoImage} alt="Logo" />
    </HeaderLogoStyled>
  );
};

export default HeaderLogo;
