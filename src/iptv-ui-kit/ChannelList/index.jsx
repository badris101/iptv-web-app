import styled from "styled-components";
import ChannelListItem from "iptv-ui-kit/ChannelList/ChannelListItem";

const ChannelList = () => {
  return (
    <Card>
      <ChannelListItem />
    </Card>
  );
};

const Card = styled.div`
  flex: 1;
  background: white;
  color: black;
`;

export default ChannelList;
