'use strict';

function dynamicButtons(n) {
    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < n; i++) {
            buttonTags(i);
        }
    }, false);
}

function buttonTags(index) {
    let addIndex = index + 1;
    let buttonElement = document.createElement('button');
    buttonElement.id = 'button_' + addIndex;
    buttonElement.type = 'button';
    buttonElement.innerHTML = 'Button ' + addIndex;
    buttonElement.className = 'btn-styled';

    buttonElement.onclick = function (event) {
        console.log("Button Name: ", event.target.innerHTML);
        console.log("Index: ", index);
    };
    let container = document.getElementById('dynamic-buttons');
    if (container) {
        container.appendChild(buttonElement);
    }

}

dynamicButtons(5);