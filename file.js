const inputs = document.querySelectorAll(".textInput");
const select = document.querySelector("select");
const button = document.querySelector("button");
const divPasOne = document.querySelector(".pas.one");
const divPasTwo = document.querySelector(".pas.two");
const pasOne = document.querySelector("#password");
const pasTwo = document.querySelector("#password2");
const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const f = document.querySelector(".f");
const first = document.querySelector(".firstName");
const l = document.querySelector(".l");
const last = document.querySelector(".lastName");
const e = document.querySelector(".e");
const email = document.querySelector(".email");
const p = document.querySelector(".p");
const password = document.querySelector("#password");
const c = document.querySelector(".c");
const password2 = document.querySelector("#password2");
const b = document.querySelector(".b");
const country = document.querySelector("#country");

let firstNameIsCorrect = false;
let lastNameIsCorrect = false;
let emailIsCorrect = false;
let countryIsCorrect = false;
let passwordIsCorrect = false;
let confirmIsCorrect = false;

inputs.forEach(input => input.addEventListener('input', function() {
    input.classList.add("input-one");
}))

first.addEventListener("input", function() {
    boburkurwa();
    if (nameValidation(first.value) === false) {
        f.style.opacity = 1;
        firstNameIsCorrect = false;
    }
    else {
        f.style.opacity = 0;
        firstNameIsCorrect = true;
    }
})

last.addEventListener("input", function() {
    if (nameValidation(last.value) === false) {
        l.style.opacity = 1;
        lastNameIsCorrect = false;
    }
    else {
        l.style.opacity = 0;
        lastNameIsCorrect = true;
    }
})

email.addEventListener("input", function() {
    if (emailValidation(email.value) === false) {
        e.style.opacity = 1;
        emailIsCorrect = false;
    }
    else {
        e.style.opacity = 0;
        emailIsCorrect = true;
    }
})

password.addEventListener("input", function() {
    if (passwordValidation(password.value) === false) {
        p.style.opacity = 1;
        passwordIsCorrect = false;
    }
    else {
        p.style.opacity = 0;
        passwordIsCorrect = true;
    }
})

password2.addEventListener("input", function() {
    if (confirmPassword(password.value, password2.value) === false) {
        c.style.opacity = 1;
        confirmIsCorrect = false;
    }
    else {
        c.style.opacity = 0;
        confirmIsCorrect = true;
    }
})

select.addEventListener('input', function() {
    select.classList.add("select-one");
    countryIsCorrect = true;
})

divPasOne.addEventListener("click", function() {
    divPasOne.classList.add("pass");
    if (i1.src.includes("eye_slash_pink.svg")) {
        i1.src = "eye_slash_blue.svg";
    } else if (i1.src.includes("eye_pink.svg")) {
        i1.src = "eye_blue.svg";
    }
})

divPasTwo.addEventListener("click", function() {
    divPasTwo.classList.add("pass");
    if (i2.src.includes("eye_slash_pink.svg")) {
        i2.src = "eye_slash_blue.svg";
    } else if (i2.src.includes("eye_pink.svg")) {
        i2.src = "eye_blue.svg";
    }
})

i1.addEventListener("click", function(event) {
    event.stopPropagation();
    if (i1.src.endsWith("eye_slash_blue.svg")) {
        i1.src = "eye_blue.svg";
        pasOne.type = "text";
        pasOne.classList.add("input-one-pas");
    } else if (i1.src.endsWith("eye_blue.svg")) {
        i1.src = "eye_slash_blue.svg";
        pasOne.type = "password";
    } else if (i1.src.endsWith("eye_slash_pink.svg")) {
        i1.src = "eye_pink.svg";
        pasOne.type = "text";
        pasOne.classList.add("input-one-pas");
    } else if (i1.src.endsWith("eye_pink.svg")) {
        i1.src = "eye_slash_pink.svg";
        pasOne.type = "password";
    }
});


i2.addEventListener("click", function(event) {
    event.stopPropagation();
    if (i2.src.endsWith("eye_slash_blue.svg")) {
        i2.src = "eye_blue.svg";
        pasTwo.type = "text";
        pasTwo.classList.add("input-one-pas");
    } else if (i2.src.endsWith("eye_blue.svg")) {
        i2.src = "eye_slash_blue.svg";
        pasTwo.type = "password";
    } else if (i2.src.endsWith("eye_slash_pink.svg")) {
        i2.src = "eye_pink.svg";
        pasTwo.type = "text";
        pasTwo.classList.add("input-one-pas");
    } else if (i2.src.endsWith("eye_pink.svg")) {
        i2.src = "eye_slash_pink.svg";
        pasTwo.type = "password";
    }
});

function nameValidation(name) {
    var regex = /^[a-zA-Z\-]+$/;
    if (name.length > 20 || !regex.test(name)) {
        return false;
    }
}

function emailValidation(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function passwordValidation(password) {
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;

    if (!uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !digitRegex.test(password) ||
        password.length < 8) {
        return false;
    }
    return true;
}

function confirmPassword(pass1, pass2) {
    if (pass1 === pass2) {
        return true;
    }
    else {
        return false;
    }
}

button.addEventListener("click", function(event) {
    if (!firstNameIsCorrect || !lastNameIsCorrect || !emailIsCorrect || !countryIsCorrect || !passwordIsCorrect || !confirmIsCorrect) {
        event.preventDefault();
        b.style.opacity = 1;
    }
    else {
        b.style.opacity = 0;
        let div = document.querySelector(".right");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        let thanks = document.createElement("div");
        thanks.classList.add("thanks");
        thanks.textContent = "Thank you, your registration is complete";
        div.style.justifyContent = "center";
        div.style.alignItem = "center";
        div.appendChild(thanks);
        setTimeout(function() {
            thanks.style.opacity = '1';
          }, 500);
    }
})

function boburkurwa() {
    if (first.value.toLowerCase() === "bob") {
        first.value = "Bobur";
        first.classList.add("input-one");
        last.value = "Kurwa";
        last.classList.add("input-one");
        email.value = "boburkurwa2003@gmail.com";
        email.classList.add("input-one");
        country.value = "Poland";
        country.classList.add("select-one");
        password.value = "Boburkurwa2003";
        password.classList.add("input-one");
        password2.value = "Boburkurwa2003";
        password2.classList.add("input-one");
        firstNameIsCorrect = true;
        lastNameIsCorrect = true;
        emailIsCorrect = true;
        countryIsCorrect = true;
        passwordIsCorrect = true;
        confirmIsCorrect = true;
    }
}

window.addEventListener('load', function() {
    let elements = document.querySelectorAll('.move');
    elements.forEach(function(element) {
        element.classList.add('move1');
    });
});
