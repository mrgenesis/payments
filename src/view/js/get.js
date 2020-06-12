function get(param = {get: "url", main: {}, space: "name"}){
    let removePlus = /\+/g,
        get = param.get;

    param.main[param.space] = {};
    get = get.split("&");
    get.forEach(function (getItem) {
        getItem = getItem.split("=");
        param.main[param.space][decodeURIComponent(getItem[0])] = decodeURIComponent(getItem[1].replace(removePlus, " "));
    });
}

export { get };