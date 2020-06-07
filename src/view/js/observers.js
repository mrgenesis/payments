const publisher = (function (typeName = "any") {
    return { 
        subscribers: {},
        subscribe: function (fn, type =  typeName) {
            if (!this.subscribers[type]) {
                this.subscribers[type] = [];
            }
            this.subscribers[type].push(fn);
        },
        unsubscribe: function () {},
        notify: function (param, type = typeName) {
            this.subscribers[type].forEach(function (fn) {
                fn(param);
            });
        }
    };
})();
export { publisher };
