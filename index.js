import express from 'express';
import cors from 'cors';

import { setupRoutes } from './routes/index.js'

const app = express();
const PORT = 5005;

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

setupRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello From HomePage')
});

app.listen(PORT, () => console.log(`✅ -- Server Running on port: http://localhost:${PORT} -- ✅`));