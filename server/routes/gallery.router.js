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
    const queryText = `SELECT * FROM pictures ORDER BY created_date DESC, id;`;

    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        alert('error GETting from DB', error);
        res.sendStatus(500);
    })
    
}); // END GET Route


// POST Route
router.post('/', (req, res) => {
    const queryText = 'INSERT INTO pictures (path, description) VALUES($1, $2);';

    pool.query(queryText, [req.body.path, req.body.description]).then(()=>{
        res.sendStatus(201);
        console.log('POST successful');
    }).catch((error)=> {
        alert('error POSTing', error);
    });
});



module.exports = router;