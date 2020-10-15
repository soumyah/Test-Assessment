'use strict';

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