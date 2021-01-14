import styled from "styled-components";

const ChannelListItem = ({
  channel,
  index,
  selected,
  handleSelectedChannel,
}) => {
  return (
    <ItemContainer selected={selected} onClick={handleSelectedChannel}>
      <ItemIndex selected={selected}>
        <span>{index}</span>
      </ItemIndex>
      <ItemName>
        <span>{channel.name}</span>
      </ItemName>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  height: 80px;
  background: ${({ selected }) => (selected ? "#d6e4f5" : "white")};
  cursor: pointer;
`;

const ItemIndex = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  background: ${({ selected }) => (selected ? "#a0b6d0" : "#5e7fa9")};
  color: white;
`;

const ItemName = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export default ChannelListItem;
