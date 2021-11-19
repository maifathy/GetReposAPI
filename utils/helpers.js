const api = `https://api.github.com/search/repositories?q=created:>${new Date()}&sort=stars&order=desc`;

export default api;
