import Iptv from "utils/Iptv";

export const getChannels = () => {
  return Iptv.get("/iptv/channels.json").then((res) =>
    res.data.filter((elm) => elm.category === "Sport")
  );
};
