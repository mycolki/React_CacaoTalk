import { keyframes } from '@emotion/react';

export const slideDown = keyframes`
  0% {
    height:0;
  }
  10% {
    height: 10px;
  }
  20% {
    height: 20px;
  }
  30% {
    height: 40px;
  }
  50% {
    height: 60px;
  }
  80% {
    height: 70px;
  }
  100% {
    height: 73.5px;
  }
`;

export const loader = keyframes`
  0% {
    width: 0;
  }
  20% {
    width: 10%;
  }
  25% {
    width: 24%;
  }
  43% {
    width: 41%;
  }
  56% {
    width: 50%;
  }
  66% {
    width: 52%;
  }
  71% {
    width: 60%;
  }
  75% {
    width: 76%;
  }
  94% {
    width: 86%;
  }
  100% {
    width: 100%;
  }
`;

export const slideChatText = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    transform:translateX(10px);
    opacity: 0.1;
  }
  50% {
    transform:translateX(40px);
    opacity:0.5;
  }
  60% {
    transform:translateX(50px);
    opacity:0.8;
  }
  100% {
    transform:translateX(80px);
    opacity: 1;
  }
`;

export const slideChatProfile = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    transform:translateX(5px);
    opacity: 0.1;
  }
  40% {
    transform:translateX(10px);
    opacity:0.2;
  }
  50% {
    transform:translateX(10px);
    opacity:0.3;
  }
  60% {
    transform:translateX(15px);
    opacity:0.6;
  }
  80% {
    transform:translateX(18px);
    opacity:0.8;
  }
  100% {
    transform:translateX(20px);
    opacity: 1;
  }
`;

export const slideLeftTalk = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    transform:translateX(-10px);
    opacity: 0.1;
  }
  50% {
    transform:translateX(-40px);
    opacity:0.5;
  }
  60% {
    transform:translateX(-50px);
    opacity:0.8;
  }
  100% {
    transform:translateX(-80px);
    opacity: 1;
  }
`;

export const slideRightTalk = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    transform:translateX(-5px);
    opacity: 0.1;
  }
  40% {
    transform:translateX(-10px);
    opacity:0.2;
  }
  50% {
    transform:translateX(-10px);
    opacity:0.3;
  }
  60% {
    transform:translateX(-15px);
    opacity:0.6;
  }
  80% {
    transform:translateX(-18px);
    opacity:0.8;
  }
  100% {
    transform:translateX(-20px);
    opacity: 1;
  }
`;
