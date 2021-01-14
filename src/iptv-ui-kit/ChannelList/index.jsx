import styled from "styled-components";
import ChannelListItem from "iptv-ui-kit/ChannelList/ChannelListItem";

const ChannelList = ({
  isLoading,
  channels,
  defaultChannel,
  setDefaultChannel,
}) => {
  return (
    <Card>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        channels.map((channel, idx) => {
          return (
            <ChannelListItem
              channel={channel}
              key={idx}
              index={++idx}
              handleSelectedChannel={() => setDefaultChannel(channel)}
              selected={defaultChannel.url === channel.url}
            />
          );
        })
      )}
    </Card>
  );
};

const Card = styled.div`
  flex: 1;
  background: white;
  color: black;
  overflow: auto;
  height: 788px;
`;

export default ChannelList;
