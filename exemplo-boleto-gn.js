//oneStep Node.JS
'use strict';
var moment = require('moment'); // pacote para uso de datas
var Gerencianet = require('gn-api-sdk-node'); // caminho relacionado a SDK
var credentials = {
    client_id: "xxxxxxxxxxxxxxxxxxxxxxx",
    client_secret: "xxxxxxxxxxxxxxxxxx"
};
var options = {
 client_id: credentials.client_id,
 client_secret: credentials.client_secret,
 sandbox: true // altere conforme o ambiente (true = desenvolvimento e false = producao)
}
var tomorrow = moment() //Função para atribuição de data válida automática
 .add(2, 'days')
 .format('YYYY-MM-DD');
var currentDate = moment() //Função para atribuição de data válida automática
 .add(1, 'days')
 .format('YYYY-MM-DD');
var paymentBody = {
 payment: {
   banking_billet: {
     expire_at: tomorrow,
     customer: {
       name: 'Gorbadoc Oldbuck', // nome do cliente
       cpf: '94271564656', // cpf válido do cliente
       phone_number: '5144916523' // telefone do cliente
     },
     configurations: { // configurações de juros e mora
       fine: 200, // porcentagem de multa
       interest: 33// porcentagem de juros
     },
     conditional_discount: { // configurações de desconto condicional
       type: 'percentage', // seleção do tipo de desconto 
       value: 500, // porcentagem de desconto
       until_date: currentDate // data máxima para aplicação do desconto
     },
     discount: { // configuração de descontos
       type: 'currency', // tipo de desconto a ser aplicado
       value: 599 // valor de desconto 
     }
   }
 },
 items: [{
   name: 'Product 1', // nome do item, produto ou serviço
   value: 1000, // valor (1000 = R$ 10,00) (Obs: É possível a criação de itens com valores negativos. Porém, o valor total da fatura deve ser superior ao valor mínimo para geração de transações.)
   amount: 2 // quantidade
 }],
 shippings: [{
   name: 'Default Shipping Cost', // descrição do frete(caso exista)
   value: 100 // valor do frete
 }]
}
var gerencianet = new Gerencianet(options);
gerencianet
 .oneStep({}, paymentBody)
 .then(console.log)
 .catch(console.log)
 .done();