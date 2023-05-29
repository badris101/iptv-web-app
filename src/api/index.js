import Iptv from "utils/Iptv";

export const getChannels = () => {
  return Iptv.get("/api/channels.json").then((res) =>
    res.data.filter((elm) => {
      return elm.categories.length > 0 && elm.categories?.includes("Sports");
    })
  );
};
