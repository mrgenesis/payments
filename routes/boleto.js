const router = require('express').Router(),
      moment = require('moment'),
      Gerencianet = require('gn-api-sdk-node');

router.get('/test', (req, res) => {
    res.status(200).send(req.body.test);
});
router.get('/one', (req, res) => {
    res.status(200).send("Testing...");
});
router.post('/one', (req, res) => {
    const options = {
            client_id: process.env.ID,
            client_secret: process.env.SECRET,
            sandbox: true
        },
        dueDate = moment().add(3, 'days').format('YYYY-MM-DD'),
        paymentBody = {
            payment: {
                banking_billet: {
                    expire_at: dueDate,
                    customer: {
                        name: req.body.customer.name,
                        cpf: req.body.customer.cpf,
                        phone_number: req.body.customer.phone
                    },
                    configurations: {
                        fine: 0,
                        interest: 33
                    }
                }
            },
            items: [{
                name: req.body.products.name,
                value: +req.body.products.value,
                amount: +req.body.products.amount
            }],
            shippings: [{
                name: 'Taxa para processar o pagamento.',
                value: 299
            }]
        },
        gn = new Gerencianet(options);


        gn.oneStep({}, paymentBody)
            .then((data) => {
                console.log(data);
                res.status(201).send(data);   
            }).catch((err) => {
                console.log(`
                ########### ERROR ###########
                ${err}
                `);
                res.status(501).json(err);
            });

    //res.status(201).json(link);
    
});

module.exports = router;