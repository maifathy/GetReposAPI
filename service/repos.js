import axios from 'axios';
import api from '../utils/helpers.js';

const repos = {
  get: () => {
    return axios.get(api);
  }
};

export default repos;
