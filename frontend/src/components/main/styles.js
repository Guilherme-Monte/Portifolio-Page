import styled from "styled-components";
import LakeCover from "../../assets/videos/LakeCover.jpg";

export const MainSection = styled.section`
  margin-top: calc(var(--nav-menu-size) + 3vh);
`;

export const BgImgContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${LakeCover}) no-repeat center center/cover;
  z-index: -1;
`;

export const BgImgAfter = styled.div`
  &:after {
    content: "";
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;