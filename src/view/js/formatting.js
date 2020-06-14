function formatting (main) {
 
    switch (main.config.formatting) {
    case "name":
        if (main.info.elements.phone) {
            if (main.validations.name) {
                main.info.elements.validationIconName.className = "validation-icon true-icon";
                main.info.elements.validationIconName.innerHTML = main.info.assets.icons.t;
            } else {
                main.info.elements.validationIconName.className = "validation-icon false-icon";
                main.info.elements.validationIconName.innerHTML = main.info.assets.icons.f;
            }
        }
        break;

    case "phone":
        if (main.info.elements.phone) {
            if (main.validations.phone) {
                main.info.elements.validationIconPhone.className = "validation-icon true-icon";
                main.info.elements.validationIconPhone.innerHTML = main.info.assets.icons.t;
            } else {
                main.info.elements.validationIconPhone.className = "validation-icon false-icon";
                main.info.elements.validationIconPhone.innerHTML = main.info.assets.icons.f;
            }
        }
        break;

    case "cpf":
        if (main.validations.cpf) {
            main.info.elements.validationIconCpf.className = "validation-icon true-icon";
            main.info.elements.validationIconCpf.innerHTML = main.info.assets.icons.t;
        } else {
            main.info.elements.validationIconCpf.className = "validation-icon false-icon";
            main.info.elements.validationIconCpf.innerHTML = main.info.assets.icons.f;
        }
        break;

    case "bankingBillet":
        main.info.elements.btnTxt.innerHTML = "Aguarde... ";
        main.info.elements.loader.style.visibility = "initial";
        main.info.elements.name ? main.info.elements.name.disabled =  true : "";
        main.info.elements.phone ? main.info.elements.phone.disabled = true : "";
        main.info.elements.cpf.disabled = true;
        break;
    case "bankingBilletLink":
        main.info.elements.download.innerHTML = `<a target="_blank" class="btn btn-download" href="${main.bankingBillet.data.pdf.charge}">&DownArrowBar; Baixar Boleto</a>`;
    }

    if (main.validations.name && main.validations.phone && main.validations.cpf) {
        main.info.elements.btn.style.backgroundColor = "#2a2a2a";
        main.info.elements.btn.style.color = "#fff";
    } else {
        main.info.elements.btn.style.backgroundColor = "#eee";
        main.info.elements.btn.style.color = "#848484";
    }

}

export { formatting };