import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:63745/api/v1`,
  timeout: 1000,
  headers: {
    Authorization: 'bearer '+token,
  }
});