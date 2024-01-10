import { keyframes } from '@emotion/react';

export const galleryDown = keyframes`
  0% {
    height:0;
  }
  98% {
    height: 100px;
  }
  100% {
    height: 90px;
  }
`;

export const progressBarLoader = keyframes`
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

export const chatRoomListItemTextSlide = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    transform:translateX(10px);
    opacity: 0.1;
  }
  30% {
    transform:translateX(20px);
    opacity: 0.3;
  }
  50% {
    transform:translateX(40px);
    opacity:0.5;
  }
  60% {
    transform:translateX(50px);
    opacity:0.6;
  }
  80% {
    transform:translateX(60px);
    opacity:0.8;
  }
  100% {
    transform:translateX(80px);
    opacity: 1;
  }
`;

export const chatRoomListItemProfileImageSlide = keyframes`
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
    opacity:0.5;
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

export const leftChatSlide = keyframes`
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

export const rightChatSlide = keyframes`
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
