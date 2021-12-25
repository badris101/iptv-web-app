import Layout from "iptv-ui-kit/Layout";
import Player from "iptv-ui-kit/Player";
import ChannelList from "iptv-ui-kit/ChannelList";
import { useQuery } from "react-query";
import { getChannels } from "api";
import { useEffect, useState } from "react";

const App = () => {
  const { data, isLoading } = useQuery("getChannels", getChannels);
  const [defaultChannel, setDefaultChannel] = useState({});

  console.log("data", { data });

  useEffect(() => {
    if (data && data.length > 0) {
      setDefaultChannel(data[0]);
    }
  }, [data]);

  return (
    <Layout>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <Player defaultChannel={defaultChannel} />
      )}
      <ChannelList
        isLoading={isLoading}
        channels={data}
        defaultChannel={defaultChannel}
        setDefaultChannel={setDefaultChannel}
      />
    </Layout>
  );
};

export default App;
