const createFields = function (name, placeholder, id = name, type = 'text') {
    let div = document.createElement('div')
      , input = document.createElement('input')
      , span = document.createElement('span');
    div.className = 'fields';
    input.type = type;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    span.id = 'validation-icon-' + id;
    div.insertAdjacentElement('afterbegin', span);
    div.insertAdjacentElement('afterbegin', input);
    return div;
};

export { createFields };