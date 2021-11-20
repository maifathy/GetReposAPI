const date = new Date().getFullYear()
  + '-' + parseInt(new Date().getMonth() + 1)
  + '-' + new Date().getDate() - 1;
const api = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;

export default api;
