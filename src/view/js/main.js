let main = {};
main.config = {
    validating: "",
    formatting: "",
    input: "",
    await: false,
    createHTML: false
};
main.info = {
    assets: {
        icons: {
            t: "&#10004;",
            f: "&#10006;",
            download: "&DownArrowBar;"
        }
    },
    elements: {
        name: document.getElementById("name"),
        phone: document.getElementById("phone"),
        cpf: document.getElementById("cpf"),
        btn: document.getElementById("createBankingBillet"),
        validationIconName: document.getElementById("validation-icon-name"),
        validationIconPhone: document.getElementById("validation-icon-phone"),
        validationIconCpf: document.getElementById("validation-icon-cpf"),
        btnTxt: document.getElementById("btn-txt"),
        loader: document.getElementById("loader"),
        download: document.getElementById("download")
    }
};
main.validations = {
    name: false, phone: false, cpf: false
};

import { publisher } from '/v/js/observers.js';
import { makePublisher } from '/v/js/make-publisher.js';
import { configMain } from '/v/js/config-main.js';

makePublisher(publisher, main);

import { get } from '/v/js/get.js';
main.subscribe(get, "get");
main.notify({get: window.location.search.substr(1), main: main, space: "get"}, "get");

import { validationPhone } from "/v/js/validation-phone.js";
main.subscribe(validationPhone, "validationPhone");
main.notify(configMain({createHTML: true, formatting: "phone", validating: main.get.telNo}, main), "validationPhone");

import { validationName } from "/v/js/validation-name.js";
main.subscribe(validationName, "validationName");
main.notify(configMain({createHTML: true, formatting: "name", validating: main.get.name}, main), "validationName");

if (main.info.elements.name) {
    main.info.elements.name.addEventListener("keyup", function () {
        main.notify(configMain({formatting: "name", validating: this.value}, main), "validationName");
    });
}
if (main.info.elements.phone) {
    main.info.elements.phone.addEventListener("keyup", function () {
        main.notify(configMain({formatting: "phone", validating: this.value}, main), "validationPhone");
    });
}

import { validationCPF } from "/v/js/validation-cpf.js";
import { onlyNumbers } from '/v/js/only-numbers.js';
main.subscribe(validationCPF, "validationCPF");
main.subscribe(onlyNumbers, "validationCPF");
main.info.elements.cpf.addEventListener("keyup", function () {
    main.notify(configMain({validating: this.value, input: this, formatting: "cpf"}, main), "validationCPF");
});

import { bankingBillet } from "/v/js/banking-billet.js";
import { formatting } from "/v/js/formatting.js";
main.subscribe(bankingBillet, "bankingBillet");
main.subscribe(formatting, "bankingBillet");
main.subscribe(formatting, "link");
main.info.elements.btn.addEventListener("click", function () {
    if (main.validations.name && main.validations.phone && main.validations.cpf && !main.info.await) {
        main.notify(configMain({formatting: "bankingBillet"}, main), "bankingBillet");
    }
});
export { main };