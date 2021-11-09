import express from 'express';
import cors from 'cors';

import articlesRoutes from './routes/articles.js';

const app = express();
const PORT = 5000;

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/articles', articlesRoutes);

app.get('/', (req, res) => {
    res.send('Hello From HomePage')
});

app.listen(PORT, () => console.log(`✅ -- Server Running on port: http://localhost:${PORT} -- ✅`));