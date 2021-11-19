import axios from 'axios';
import api from './utils/helpers';

const repos = {
  getRepos: function (req, res) {
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
