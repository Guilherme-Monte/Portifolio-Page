import styled from "styled-components";
import LakeCover from "../../../assets/videos/LakeCover.jpg";

export const HeroContainer = styled.section`
  min-height: calc(100vh - var(--nav-menu-size));
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroCaption = styled.p`
  width: 30%;
  font-size: 1.2rem;
  z-index: 2;

  color: var(--text-secondary);
`;

export const Description = styled.p`
  width: 30%;
  text-align: justify;
  font-size: 0.8rem;
  z-index: 2;

  color: var(--text-secondary);
`;

export const Button = styled.button`  
  border: 1px solid var(--text-primary);
  color: var(--text-primary);
  background-color: transparent;
  overflow: hidden;
  
  padding: 6px 50px;
  margin-top: 50px;

  cursor: pointer;
  
  transition: var(--transition-speed);

  position: relative;
  z-index: 1;

  &::before {
    background-color: var(--hover-color);

    left: 0;
    width: 100%;
    height: 0%;
    /* The height has to be here so the transition can function  properly */
    z-index: -1;
    
    transition: 300ms;
    
    content: "";
    position: absolute;

    top: 0;
    border-radius: 0 0 50% 50%;
  }

  &:hover {
    color: var(--bg-primary);
    border: 1px solid var(--hover-color);
  }

  &:hover&::before {
    height: 180%;
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${LakeCover}) no-repeat center center/cover;
  z-index: -1;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const VideoPlayerAfter = styled.div`
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;