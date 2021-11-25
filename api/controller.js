import repos from '../service/repos.js';

const controller = {
  getLanguages: (req, res) => {
    repos.get()
    .then((response) => {
      let items = response.data.items;
      let counter = 0;
      let languages;
      const allLangs = items.map((item) => item.language);
      const obj = response.data.items.reduce((result, currentValue) => {
        (
          result[currentValue['language']]
          = result[currentValue['language']] || []
        )
        .push(currentValue.name);
        return result;
      },
      {});
      languages =  [...new Set(allLangs.map((lang) => lang || "No Language"))];
      const langs = Object.values(obj).reduce((result, repos) => {
        const count = {
          total: repos.length
        }
        repos = {repos, count};
        result[languages[counter]] = repos;
        counter += 1;
        return result;
      },
      {});
      res.send(JSON.stringify(langs));
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
      res.send(JSON.stringify({Error: 'An error has been happened, please try again later'}));
    })
  }
};

export default controller;
