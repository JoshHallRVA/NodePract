const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
        console.log('Get request in places');
        res.json({message: 'It workds'});
});


module.exports = router;