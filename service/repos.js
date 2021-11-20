import axios from 'axios';
import api from '../utils/helpers.js';

const repos = {
  get: function (req, res) {
      axios.get(api)
      .then(function (response) {
        res.send(response);
      })
      .catch(function (error) {
        res.send(error);
      })
    }
};

export default repos;
