import axios from 'axios';

const client = axios.create({
  baseURL: 'https://a8031139-d3f7-4f9a-abdc-68bef69d44ca.mock.pstmn.io', // test API via Postman
  // baseURL: API_URL // live backend URL
});

export default client;