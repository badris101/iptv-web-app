import axios from "axios";

export default axios.create({
  baseURL: "https://iptv-org.github.io/",
  params: {
    maxResults: 25,
  },
});
