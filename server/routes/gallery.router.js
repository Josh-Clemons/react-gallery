const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT Route
router.put('/like/:id', (req, res) => {
    const queryText = 'UPDATE pictures SET likes = likes + 1 WHERE id = $1'
    const galleryId = req.params.id;

    pool.query(queryText, [galleryId]).then((results) => {
        console.log('success in like increment put');
        res.sendStatus(200);
    }).catch(error => {
        alert('error PUTting to DB', error);
    });

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM pictures ORDER BY id;`;

    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        alert('error GETting from DB', error);
        res.sendStatus(500);
    })
    
}); // END GET Route

module.exports = router;