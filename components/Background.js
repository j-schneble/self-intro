import React from "react";
import styled from "styled-components";

import mountain1 from "../public/images/mountain1.svg"
import mountain2 from "../public/images/mountain2.svg"
import mountain3 from "../public/images/mountain3.svg"
import mountain4 from "../public/images/mountain4.svg"
import mountain5 from "../public/images/mountain5.svg"
import heroWave from "../public/images/hero-wave.svg";
import blurLayer from "../public/images/blur-layer.webp";

export default function HeroBackground() {
  return (
    <Wrapper>
      
      <BlurLayer />
  
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 40;
  width: 100%;
  max-height: max-content;
 
  background: transparent;

  overflow: hidden;

`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position:  center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

const Wave1 = styled(Wave)`
  top: 190px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Wave)`
  top: 50%;
  height: 464px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Wave)`
  top: 447px;
  height: 408px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Wave)`
  top: 466px;
  height: 457px;
  background-image: url(${mountain4});
`;

const Wave5 = styled(Wave)`
  top: 450px;
  height: 867px;
  background-image: url(${mountain5});
`;

const Wave6 = styled(Wave)`
  top: 700px;
  height: 630px;
  background-image: url(${heroWave});
`;

const BlurLayer = styled(Wave)`
  top: 10px;
  height: 1503px;
  background-image: url(${blurLayer});
`;
  
  