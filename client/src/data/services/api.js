import axios from 'axios';

export default axios.create({
  baseURL: 'https://fauna-grocery.herokuapp.com/'
});
