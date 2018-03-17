/**
 * Created by nimengwei on 2018/3/13.
 */

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to '
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());

