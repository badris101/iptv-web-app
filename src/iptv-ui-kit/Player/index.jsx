import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = () => {
  return (
    <ContainerPlayer>
      <ReactPlayer
        width="100%"
        height="100%"
        controls="true"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </ContainerPlayer>
  );
};

const ContainerPlayer = styled.div`
  flex: 4;
`;

export default Player;
