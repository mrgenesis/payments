const boleto = function (main) {
    let valor = main.rcData.sellingcurrencyamount.split("."),
        form = (valor[1].length === 1) ? valor[1] + "" + 0 : "";

    main.rcData.sellingcurrencyamount = valor[0] + "" + form;

    (async () => {
        await fetch("/boleto/one", {
            method: "POST",
            body: JSON.stringify({
                "customer": {
                    "name": main.rcData.name, // Regra: ^[ ]*(.+[ ]+)+.+[ ]*$
                    "phone": main.rcData.telNo, // Regra: ^[1-9]{2}9?[0-9]{8}$
                    "cpf": main.cpf
                },
                "products": {
                    "name": `ID: ${main.rcData.paymenttypeid}, Usuário: ${main.rcData.userid}, ${main.rcData.emailAddr}`,
                    "value": main.rcData.sellingcurrencyamount,
                    "amount": 1
                }
    
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json()).then(data => {
            main.boleto = data;
        });
        if (main.boleto.error) {
            console.log(main.boleto.error_description.message)

        } else {
            document.getElementById("download").innerHTML = `<a target="_blank" class="btn btn-download" href="${main.boleto.data.pdf.charge}">&DownArrowBar; Baixar Boleto</a>`;
        }
        // 
    })();
};

export { boleto };