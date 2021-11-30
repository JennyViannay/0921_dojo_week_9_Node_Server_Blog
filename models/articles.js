import connection from '../config/config.js';

const findAllArticles = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM article', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    })
}

export default { findAllArticles };