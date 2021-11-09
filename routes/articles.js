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
    // TODO:: you code here
});

// DELETE
router.delete('/:id', (req, res) => {
    // TODO:: you code here
});

// CREATE
router.post('/', (req, res) => {
    // TODO:: BONUS: you code here
});

// UPDATE
router.post('/:id', (req, res) => {
    // TODO:: BONUS: you code here
});



export default router;