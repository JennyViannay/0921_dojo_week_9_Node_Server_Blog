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
    connection.query(`SELECT * FROM article WHERE id = ${Number(req.params.id)}`, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la récupération de l\'article !!`);
        else if (result == "") res.status(404).send('Not found');
        else res.status(200).send(result);
    });
});

// CREATE
router.post('/', (req, res) => {
    const data = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.image),
        Number(req.body.price),
        Number(req.params.id)
    ];
    connection.query(`INSERT INTO article (title, content, image) VALUES (?, ?, ?)`, data,
        (err, result) => {
            if (err) res.status(500).send(`Erreur lors de la création de l\'article !! ${err}`);
            else res.status(200).send(result);
        });
});

// UPDATE
router.post('/:id', (req, res) => {
    const data = [
        String(req.body.title),
        String(req.body.content),
        String(req.body.image),
        Number(req.params.id)
    ];
    connection.query(`UPDATE article SET title = ?, content = ?, image = ? WHERE id = ?`, data,
        (err, result) => {
            if (err) res.status(500).send(`Erreur lors de la modification de l\'article !!`)
            else res.status(200).send(result)
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    connection.query(`DELETE FROM article WHERE id = ${Number(req.params.id)}`,
        (err, result) => {
            if (err) res.status(500).send(`Erreur lors de la suppression de l\'article !!`)
            else res.status(200).send(result)
        });
});

export default router;