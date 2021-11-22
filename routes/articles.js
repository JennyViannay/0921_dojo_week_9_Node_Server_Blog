import express from 'express';
import connection from '../config/config.js';
// All routes in this file starting by '/articles'
const router = express.Router();

// GET ALL
router.get('/', (req, res) => {
    connection.query('SELECT * FROM article', (err, results) => {
        if (err) res.status(500).send(`Erreur lors de la récupération des articles !!`);
        else res.status(200).send(results);
    });
});

// GET ONE
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    connection.query('SELECT * FROM article WHERE id=?', id, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la récupération de l'article !!`);
        else {
            result.length > 0 ? res.status(200).send(result) : res.status(404).send(`Article n'existe pas !!`);
        }
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    connection.query('DELETE FROM article WHERE id=?', id, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la suppression de l'article !!`);
        else {
            result ?
                res.status(200).send(`L'article id ${id} a bien été supprimé !!`)
                :
                res.status(404).send(`L'article id ${id} n'existe pas !!`);
        }
    });
});

// CREATE
router.post('/', (req, res) => {
    const article = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.image),
    ];
    connection.query('INSERT INTO article (title, content, image) VALUES (?, ?, ?)', article, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la création de l'article !!`);
        else res.status(201).send(String(result.insertId));
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const articleId = Number(req.params.id);
    const article = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.image),
        articleId,
    ];
    connection.query('UPDATE article SET title = ?, content = ?, image = ? WHERE id = ?', article, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la modification de l'article !!`);
        else { 
            connection.query('SELECT * FROM article WHERE id=?', articleId, (err, result) => {
                if (err) res.status(500).send(`Erreur lors de la récupération de l'article !!`);
                else {
                    result.length > 0 ? res.status(200).send(result) : res.status(404).send(`Article n'existe pas !!`);
                }
            });
        }
    });
});

export default router;