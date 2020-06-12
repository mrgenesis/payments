function centavos (price, aux = "") {
    price = price.split("."),
    aux = (price[1].length === 1) ? price[1] + "" + 0 : "";
    return price[0] + "" + aux;
}
import { configMain } from '/v/js/config-main.js';

const bankingBillet = function (main) {
    
    /*let valor = main.get.sellingcurrencyamount.split("."),
        form = (valor[1].length === 1) ? valor[1] + "" + 0 : "";

    main.get.sellingcurrencyamount = valor[0] + "" + form;*/
    main.get.sellingcurrencyamount = centavos(main.get.sellingcurrencyamount);
    (async () => {
        await fetch("/boleto/one", {
            method: "POST",
            body: JSON.stringify({
                "customer": {
                    "name": main.get.name, // Regra: ^[ ]*(.+[ ]+)+.+[ ]*$
                    "phone": main.get.telNo, // Regra: ^[1-9]{2}9?[0-9]{8}$
                    "cpf": main.info.elements.cpf.value
                },
                "products": {
                    "name": `ID: ${main.get.paymenttypeid}, Usuário: ${main.get.userid}, ${main.get.emailAddr}`,
                    "value": main.get.sellingcurrencyamount,
                    "amount": 1
                }
    
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json()).then(data => {
            main.bankingBillet = data;
        });

        if (main.bankingBillet.error) {
            console.log(main.bankingBillet.error_description.message)

        } else {
            main.notify(configMain({formatting: "bankingBilletLink"}, main), "link");
        }
    })();
};

export { bankingBillet };