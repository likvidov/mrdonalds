import React from "react";
import styled from "styled-components";

const PreloaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.5s;
`;

const PreloaderImage = styled.div`
  background-image: url(./spiner.svg);
  background-size: 80px 80px;
  width: 80px;
  height: 80px;
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  transition: 1s linear;
  animation: up-down 1s infinite; 
  
  @keyframes up-down{
    0%{
        top: calc(50% - var(--logo-half-size));
    }
    0%{
        top: calc(50% - 10px);
    }
    75%{
        top: calc(50%); 
    }
    100%{
        top: calc(50% - 10px);
    }
    from{
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
  }
`;

export const Preloader = () => (
  <PreloaderStyled>
    <PreloaderImage />
  </PreloaderStyled>
)