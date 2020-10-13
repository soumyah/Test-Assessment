'use strict';

function dynamicButtons(n) {
    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < n; i++) {
            buttonTags(i);
        }
    }, false);
}

function buttonTags(i) {
    let addIndex = i + 1;
    let buttonElement = document.createElement('button');
    buttonElement.id = 'button_' + addIndex;
    buttonElement.type = 'button';
    buttonElement.innerHTML = 'Button ' + addIndex;
    buttonElement.className = 'btn-styled';

    buttonElement.onclick = function (event) {
        console.log("Button Name: ", event.target.innerHTML);
        console.log("Index: ", i)
    };
    let container = document.getElementById('dynamic-buttons');
    if (container) {
        container.appendChild(buttonElement);
    }

}

function removeLabel(e, id) {
    let labelElement = document.getElementById(id);
    if (e.target.value === '') {
        labelElement.classList.remove('active');
        labelElement.classList.remove('hightlight');
        if (id === 'first-name') {
            labelElement.classList.add('first-name-label')
        } else if (id === 'pwd') {
            labelElement.classList.add('set-password-label')
        }
    } else {
        labelElement.classList.add('active');
        labelElement.classList.add('highlight')
        if (id === 'first-name') {
            labelElement.classList.remove('first-name-label')
        } else if (id === 'pwd') {
            labelElement.classList.remove('set-password-label')
        }
    }
    validateForm(e.target.name);
}

function activeTabs(evt, sectionId) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionId).style.display = "block";
    evt.currentTarget.className += " active";
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