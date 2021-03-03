import axios from "axios";

export default axios.create({
  baseURL: "https://iptv-org.github.io",
  withCredentials: false,
  params: {
    maxResults: 5,
  },
});
