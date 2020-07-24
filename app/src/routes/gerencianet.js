const router = require('express').Router(),
      moment = require('moment'),
      sandbox = process.env.ENVIRONMENT === "sandbox",
      Gerencianet = require('gn-api-sdk-node');

router.post('/banking-billet', (req, res) => {
    const options = {
            client_id: process.env.ID,
            client_secret: process.env.SECRET,
            sandbox: sandbox
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
});

module.exports = app => app.use('/gerencianet', router);