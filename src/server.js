import axios from "axios";

const server = axios.create({
  baseURL: 'https://server.blabla.com',
  headers: {
      'Content-Type': 'application/json'
  }
});

export default server;