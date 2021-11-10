import express from 'express';
import connection from '../config/config.js';
// All routes in this file starting by '/categories'
const router = express.Router();

// GET ALL
router.get('/', (req, res) => {
    connection.query('SELECT * FROM category', (err, results) => {
        if (err) res.status(500).send(`Erreur lors de la récupération des categories !!`);
        else res.status(200).send(results);
    });
});

// GET ONE
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    connection.query('SELECT * FROM category WHERE id = ?', id, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la récupération de la catégorie !!`);
        else {
            result.length > 0 ? res.status(200).send(result) : res.status(404).send(`La categorie n'existe pas !!`);
        }
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    connection.query('DELETE FROM category WHERE id = ?', id, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la suppression de la categorie !!`);
        else {
            result ?
                res.status(200).send(`La categorie id ${id} a bien été supprimée !!`)
                :
                res.status(404).send(`La categorie id ${id} n'existe pas !!`);
        }
    });
});

// CREATE
router.post('/', (req, res) => {
    connection.query('INSERT INTO category (title) VALUES (?)', String(req.body.title), (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la création de la categorie !!`);
        else res.status(201).send(String(result.insertId));
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    const categoryId = Number(req.params.id);
    const category = [
        String(req.body.title),
        categoryId
    ];
    connection.query('UPDATE category SET title = ? WHERE id = ?', category, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de la modification de la categorie !!`);
        }
        else { 
            connection.query('SELECT * FROM category WHERE id = ?', categoryId, (err, result) => {
                if (err) res.status(500).send(`Erreur lors de la récupération de l'category !!`);
                else {
                    result.length > 0 ? res.status(200).send(result) : res.status(404).send(`La categorie n'existe pas !!`);
                }
            });
        }
    });
});

export default router;