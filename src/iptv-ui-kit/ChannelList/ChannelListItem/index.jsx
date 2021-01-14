import styled from "styled-components";
import Play from "iptv-ui-kit/assets/Svg/Play";

const ChannelListItem = () => {
  return (
    <ItemContainer>
      <ItemIndex>
        <span>01</span>
      </ItemIndex>
      <ItemName>
        <span>Name</span>
        <Play />
      </ItemName>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  height: 80px;
`;

const ItemIndex = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  background: #5e7fa9;
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
