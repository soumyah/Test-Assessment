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

function removeLabel(event, elementId) {
    let labelElement = document.getElementById(elementId);
    if (event.target.value === '') {
        labelElement.classList.remove('active');
        labelElement.classList.remove('hightlight');
        if (elementId === 'first-name') {
            labelElement.classList.add('first-name-label')
        } else if (elementId === 'pwd') {
            labelElement.classList.add('set-password-label')
        }
    } else {
        labelElement.classList.add('active');
        labelElement.classList.add('highlight')
        if (elementId === 'first-name') {
            labelElement.classList.remove('first-name-label')
        } else if (elementId === 'pwd') {
            labelElement.classList.remove('set-password-label')
        }
    }
    validateForm(event.target.name);
}

function validateForm(name) {
    let emailValue = document.forms["signUpForm"]['email'].value;
    let passwordValue = document.forms["signUpForm"]['password'].value;
    let inputValue = document.forms["signUpForm"][name].value;
    let atposition = emailValue.indexOf("@");
    let dotposition = emailValue.lastIndexOf(".");
    if ((inputValue === '') || (name === 'password' && (passwordValue.length < 6)) ||
        (name === 'email' && (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailValue.length))) {
        document.getElementById(name).classList.add('red-border');
    } else {
        document.getElementById(name).classList.remove('red-border');
    }
}

dynamicButtons(5);