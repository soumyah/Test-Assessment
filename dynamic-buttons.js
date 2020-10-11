function dynamicButtons(n) {
    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < n; i++) {
            buttons(i);
        }
    }, false);
}

function buttons(i) {
    let index = i + 1;
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Button ' + index;
    button.className = 'btn-styled';

    button.onclick = function (event) {
        console.log("Button Name: ", event.target.innerHTML);
        console.log("Index: ", i)
    };
    let container = document.getElementById('dynamic-buttons');
    if (container) {
        container.appendChild(button);
    }

}
dynamicButtons(5);