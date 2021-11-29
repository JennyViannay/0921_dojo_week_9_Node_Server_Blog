import express from 'express';
import connection from '../config/config.js';
// All routes in this file starting by '/users'
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    const username = String(req.body.username);
    connection.query('SELECT * FROM user WHERE username=?', username, (err, result) => {
        if (err) res.status(500).send(`Erreur lors de la récupération de l'utilisateur !!`);
        if (result.length === 0) res.status(404).send(`Utilisateur introuvable !!`);
        else {
            result[0].password === req.body.password ? 
            res.status(200).send(result[0]) : 
            res.status(401).send('Mot de passe incorrect');
        }
    });
});

export default router;