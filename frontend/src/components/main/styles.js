import styled from "styled-components";
import LakeCover from "../../assets/videos/LakeCover.jpg";

export const MainSection = styled.section`
  /* margin-top: calc(var(--nav-menu-size) + 3vh); */
  padding: 0 6.5%;
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