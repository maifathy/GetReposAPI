import express from 'express';
import routes from './api/routes.js';

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => { console.log(`Server started on port: ${port}`); });
