import { formatting } from '/v/js/formatting.js';
function validationPhone(main){
    let model = /^[1-9]{2}9?[0-9]{8}$/;

    main.config.formatting = "phone";
    
    if (!main.config.validating.match(model)) {
        if (main.config.createHTML) {
            var form = document.querySelector("form"),
                div = document.createElement("div"),
                input = document.createElement("input"),
                spanValidation = document.createElement("span");

            div.className = "fields";

            input.placeholder = "Digite fone com DDD: 1199997777";
            input.name = "phone";
            input.id = "phone";
            input.value = main.get.telNo;

            spanValidation.id = "validation-icon-phone";            

            div.insertAdjacentElement("afterbegin", spanValidation);
            div.insertAdjacentElement("afterbegin", input);

            form.insertAdjacentElement("afterbegin", div);
            
            main.info.elements.phone = document.getElementById("phone");
            main.info.elements.validationIconPhone = document.getElementById("validation-icon-phone");
        }
        main.validations.phone = false;
    } else {
        main.validations.phone = true;
    }
    main.get.telNo = main.config.validating;
    formatting(main);
}

export { validationPhone };