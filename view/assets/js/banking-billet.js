function princeGnetDefault(num){
    let numArr
    , decimal = ""
    , decimalLen;

    numArr = num.toString().split(".");

    if (numArr[1]) {
        decimalLen = numArr[1].length;
    } else {
        decimalLen = 0;
    }

    switch (decimalLen) {
    case 0:
        decimal = "00";
        break;
    case 1:
        decimal = numArr[1] + "" + "0";
        break;
    case 2:
        decimal = numArr[1];
        break;
    default:
        decimal = numArr[1].substr(0, 2);
    }

    return numArr[0] + "" + decimal;
}
import { configMain } from './config-main.js';

const bankingBillet = function (main) {
    
    main.get.sellingcurrencyamount = princeGnetDefault(main.get.sellingcurrencyamount);
    (async () => {
        await fetch("/gerencianet/banking-billet", {
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