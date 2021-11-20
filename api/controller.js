import repos from '../service/repos.js';

const controller = {
  getLanguages: function (req, res) {
    repos.get(req, res);
  }
};

export default controller;
