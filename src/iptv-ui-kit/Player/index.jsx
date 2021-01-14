import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = ({ defaultChannel }) => {
  return (
    <ContainerPlayer>
      <ReactPlayer
        playing={true}
        width="100%"
        height="788px"
        controls={true}
        url={defaultChannel.url}
      />
    </ContainerPlayer>
  );
};

const ContainerPlayer = styled.div`
  flex: 4;
`;

export default Player;
