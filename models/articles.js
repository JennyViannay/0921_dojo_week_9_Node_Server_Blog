import connection from '../config/config.js';

// GET ALL
const findAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM article', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    })
}

// GET ONE
const findOne = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM article WHERE id=?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

// DELETE
const deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM article WHERE id=?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

// CREATE
const create = (article) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO article (title, content, image) VALUES (?, ?, ?)', article, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}


const update = (article, articleId) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE article SET title = ?, content = ?, image = ? WHERE id = ?', article, (err, result) => {
            if (err) reject(err);
            else { 
                connection.query('SELECT * FROM article WHERE id=?', articleId, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            }
        });
    })
}

export default { findAll, findOne, deleteOne, create, update };