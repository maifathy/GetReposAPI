import repos from '../service/repos.js';

const controller = {
  getLanguages: (req, res) => {
    repos.get()
      .then((response) => {
        let items = response.data.items;
        let counter = 0;
        let languages;
        const allLangs = items.map((item) => item.language);
        const obj = response.data.items.reduce(
          (result, currentValue) => {
            let newResult = result;
            (
              newResult[currentValue.language] = newResult[currentValue.language] || []
            )
              .push(currentValue.name);
            return newResult;
          },
          {}
        );
        languages = [...new Set(allLangs.map((lang) => lang || 'No Language'))];
        const langs = Object.values(obj).reduce(
          (result, list) => {
            let newResult = result;
            let newList = list;
            const count = {
              total: list.length
            };
            newList = { list, count };
            newResult[languages[counter]] = newList;
            counter += 1;
            return newResult;
          },
          {}
        );
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
        res.send(JSON.stringify({ Error: 'An error has been happened, please try again later' }));
      });
  }
};

export default controller;
