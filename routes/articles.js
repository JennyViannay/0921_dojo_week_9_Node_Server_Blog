import express from 'express';
import Articles from '../models/articles.js'
const router = express.Router();// All routes in this file starting by '/articles'

// GET ALL
router.get('/', async (req, res) => {
    try {
        const articles = await Articles.findAll();
        res.send(articles)
    } catch (error) {
        res.status(500).json('Erreur lors de la récupération des articles !!')
    }
});

// GET ONE
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const article = await Articles.findOne(id);
        article.length > 0 ? res.send(article) : res.status(404).send('L\'article n\'existe pas !')
    } catch (error) {
        res.status(500).json('Erreur lors de la récupération de l\'articles !!')
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await Articles.deleteOne(id);
        result ? res.send('L\'article a été supprimé avec succès') : res.status(404).send('L\'article n\'existe pas')
    } catch (error) {
        res.status(500).json('Erreur lors de la récupération de l\'articles !!')
    }
});

// CREATE
router.post('/', async (req, res) => {
    const article = [String(req.body.title), String(req.body.content), String(req.body.image)];
    try {
        const result = await Articles.create(article);
        res.status(201).send(String(result.insertId));
    } catch (error) {
        res.status(500).json('Erreur lors de la création de l\'article !!')
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const articleId = Number(req.params.id);
    const article = [String(req.body.title), String(req.body.content), String(req.body.image), articleId];
    try {
        const result = await Articles.update(article, articleId);
        result.length > 0 ? res.status(200).send(result) : res.status(404).send(`L\'article n'existe pas !!`);
    } catch (error) {
        res.status(500).json('Erreur lors de la modification de l\'article !!')
    }
});

export default router;