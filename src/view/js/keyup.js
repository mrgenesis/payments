import { validationCPF } from "./validation-cpf.js";

const keyup = function (input, forFormat, log) {
    let value = input.value,
        length = value.length,
        last = value[length - 1];
        
    if (!Number.isInteger(+last)) {
        value = value.substr(0, [length - 1]);
    }
    value = value.replace(/\s/g, "");
    input.value = value;

    if (length === 11 && validationCPF(value, log)) {
        log.enableBtn = true;
        forFormat.style.backgroundColor = "#2a2a2a";
        forFormat.style.color = "#fff";
        return true;
    } else {
        log.enableBtn = false;
        forFormat.style.backgroundColor = "#eee";
        forFormat.style.color = "#848484";
        return false;
    }
}
export { keyup };