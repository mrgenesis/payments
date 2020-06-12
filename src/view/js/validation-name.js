import { formatting } from '/v/js/formatting.js';
function validationName(main){
    let model = /^[ ]*(.+[ ]+)+.+[ ]*$/;

    if (!main.config.validating.match(model)) {
        if (main.config.createHTML) {            
            var form = document.querySelector("form"),
                div = document.createElement("div"),
                input = document.createElement("input"),
                spanValidation = document.createElement("span");

            div.className = "fields";

            input.placeholder = "Nome e Sobrenome: João Silva";
            input.name = "name";
            input.id = "name";
            input.value = main.get.name;

            spanValidation.id = "validation-icon-name";

            div.insertAdjacentElement("afterbegin", spanValidation); 
            div.insertAdjacentElement("afterbegin", input);

            form.insertAdjacentElement("afterbegin", div);

            main.info.elements.name = document.getElementById("name");
            main.info.elements.validationIconName = document.getElementById("validation-icon-name");
        }
        main.validations.name = false;
    } else {
        main.validations.name = true;
    }
    main.get.name = main.config.validating;
    formatting(main);
}

export { validationName };