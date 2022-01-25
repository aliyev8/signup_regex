const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')

//err msg
const userNameErr = document.getElementById('userNameErr');
const emailErr = document.getElementById('emailErr');
const passwordErr = document.getElementById('passwordErr')
const password2Err = document.getElementById('password2Err')

//checkbox
const checkBox = document.getElementById('checkBox')

let currentPassword = ""
let currentEmail = ""
let currentName = ""

//username_regex
userName.addEventListener('input', (e) => {
    let pattern = /^[\w]{6,8}$/;
    currentName = e.target.value;
    let valid = pattern.test(currentName);

    if (valid === true || currentName === "") {
        userNameErr.style.visibility = 'hidden'
        btn.disabled = false;
        if (valid === true) {
            userName.style.borderColor = '#28a745'
        } else {
            userName.style.borderColor = ''
        }
    } else {
        userNameErr.style.visibility = 'visible'
        btn.disabled = true;

    }
})

//email_regex
email.addEventListener('input', (e) => {
    let pattern = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
    currentEmail = e.target.value;
    let valid = pattern.test(currentEmail);

    if (valid === true || currentEmail === "") {
        emailErr.style.visibility = 'hidden'
        btn.disabled = false;
        if (valid === true) {
            email.style.borderColor = '#28a745'
        } else {
            email.style.borderColor = ''
        }
    } else {
        emailErr.style.visibility = 'visible'
        btn.disabled = true;
    }
})


//password_regex
password.addEventListener('input', (e) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    currentPassword = e.target.value;
    let valid = pattern.test(currentPassword);

    if (valid === true || currentPassword === "") {
        passwordErr.style.visibility = 'hidden'
        btn.disabled = false;
        if (valid === true) {
            password.style.borderColor = '#28a745'
        } else {
            password.style.borderColor = ''
        }
    } else {
        passwordErr.style.visibility = 'visible'
        btn.disabled = true;
    }


})

//confirm_password_regex
password2.addEventListener('input', (e) => {

    let currentValue = e.target.value;


    if (currentValue === currentPassword || currentValue === "") {
        password2Err.style.visibility = 'hidden'
        btn.disabled = false;
        if (currentValue === currentPassword) {
            password2.style.borderColor = '#28a745'
        } else {
            password2.style.borderColor = ''
        }
    } else {
        password2Err.style.visibility = 'visible'
        btn.disabled = true;
    }
})

//show_password


checkBox.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})


//submit form and send email

form.addEventListener('submit', (e) => {

    document.querySelector('.lds-hourglass').style.display = 'block'


    setTimeout(() => {


        time()
        alertMsg()
        clearForm()
    }, 2000)

    e.preventDefault()
})


function time() {
    document.querySelector('.lds-hourglass').style.display = 'none'
}

function alertMsg() {
    setTimeout(() => {
        let name = JSON.stringify(currentName)
        alert('Thank you for testing' + name)
    }, 100)
}

function clearForm() {
    setTimeout(() => {
        userName.value = ""
        email.value = ""
        password.value = ""
        password2.value = ""
        userName.style.borderColor = ''
        email.style.borderColor = ''
        password.style.borderColor = ''
        password2.style.borderColor = ''
    }, 100)
}