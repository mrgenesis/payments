const router = require('express').Router();
const boleto = require('./boleto');


router.post('/one', (req, res) => {
    boleto({
        clientId: process.env.ID,
        clientSecret: process.env.SECRET
    }, {
        // options banking billet
    });
    res.status(201).json(req.body);
    
});

module.exports = router;