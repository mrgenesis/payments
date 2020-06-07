const validationCPF = function(cpf, log) {
    cpf = cpf.toString();
    let length = cpf.length,
        nineDigits = cpf.substr(0, 9),
        first = 0,
        secund = 0,
        result = "";
        
        if (length !== 11) {
            log.cpf = {
                message: "O CPF deve ter exatamente 11 números."
            }; 
            return false;
        }
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

        if (!result) {
            log.cpf = {
                message: "O número informado não é um CPF válido."
            };
        } else {
            log.cpf = cpf;
        }
        return result;
};

export { validationCPF };