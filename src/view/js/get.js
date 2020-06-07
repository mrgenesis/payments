function get(get, obj = {}, space = "getParam"){
    let removePlus = /\+/g;
    obj[space] = {};
    get = get.split("&");
    get.forEach(function (getItem) {
        getItem = getItem.split("=");
        obj[space][decodeURIComponent(getItem[0])] = decodeURIComponent(getItem[1].replace(removePlus, " "));
    });
}

export { get };