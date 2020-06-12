function configMain(items, main) {
    main.config.validating = items.validating || "";
    main.config.formatting = items.formatting || "";
    main.config.input = items.input || "";
    main.config.createHTML = items.createHTML || false;
    main.config.await = items.await || false;
    return main;
}
export { configMain };