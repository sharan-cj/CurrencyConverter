import React from "react";
import styled from "styled-components";
import bg from "../Assets/bg.svg";

export const Background = () => {
  return (
    <BackGround>
      <Image src={bg} />
    </BackGround>
  );
};
const BackGround = styled.div`
  position: fixed;
  z-index: -100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
