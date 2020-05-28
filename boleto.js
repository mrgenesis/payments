'use strict';
const moment = require('moment'),
    Gerencianet = require('gn-api-sdk-node'),
    credencials = {
        clientId: false, 
        clientSecret: false
    },
    options = {};

function boleto (idAndSecret = credencials, configBankingBillet = options) {
    console.log("starting boleto file...")
    if (idAndSecret.clientId && idAndSecret.clientSecret) {/* todo o código vai aqui */} // endif
    else { /* tratamento do erro */}

    console.log(!!idAndSecret.clientId, !!idAndSecret.clientSecret);
    

}

module.exports = boleto;