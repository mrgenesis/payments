const onlyNumbers = function (main) { 
    main.config.input.value = main.config.input.value.replace(/[^0-9]/g, "");
}
export { onlyNumbers };