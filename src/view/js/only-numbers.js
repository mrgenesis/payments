const onlyNumbers = function (main) { 
    let value = main.config.input.value,
        length = value.length,
        last = value[length - 1];
        
    if (!Number.isInteger(+last)) {
        value = value.substr(0, [length - 1]);
    }
    value = value.replace(/\s/g, "");
    main.config.input.value = value;
}
export { onlyNumbers };