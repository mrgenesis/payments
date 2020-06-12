import { formatting } from '/v/js/formatting.js';
import { onlyNumbers } from '/v/js/only-numbers.js';
const validationCPF = function(main) {
    // onlyNumbers(main);

    let cpf = main.info.elements.cpf.value,
        length = cpf.length,
        nineDigits = cpf.substr(0, 9),
        first = 0,
        secund = 0,
        result = "";
        
        if (length !== 11) {
            result = false;
        } else {
            for (let i = 0, max = nineDigits.length, multiplicator = 10; i < max; i++, multiplicator--) {
                first += nineDigits[i] * multiplicator;
            }
            first = first % 11;
            first = (first === 0 || first === 1) ? 0 : 11 - first;
            nineDigits = nineDigits + "" + first;
        
            for (let i = 0, max = nineDigits.length, multiplicator = 11; i < max; i++, multiplicator--) {
                secund += nineDigits[i] * multiplicator;
            }
            secund = secund % 11;
            secund = (secund === 0 || secund === 1) ? 0 : 11 - secund;
            nineDigits = nineDigits + "" + secund;
            result = nineDigits === cpf;
        }

        main.validations.cpf = result;
        formatting(main);
};

export { validationCPF };