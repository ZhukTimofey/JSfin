'use strict'
const users = [
    {
        email: "timofey695@gmail.com",
        password: 'qwerty'
    },
    {
        email: "abd@gma",
        password: 'asdf'
    },
    {
        email: "abc@gma",
        password: 'zxc'
    }
]
const inputEmail = document.getElementById('login-input')
const inputPass = document.getElementById('password-input')

const inputEmailReg = document.getElementById('login-input-reg')
const inputPassReg = document.getElementById('password-input-reg')
const inputCPass = document.getElementById('cp')

inputEmail.addEventListener('change', function () {
    if (!(inputEmail.value === '' || inputPass.value === '')) {
        buttLog.removeAttribute('disabled')

    } else {
        buttLog.setAttribute('disabled', true)
    }
})
inputPass.addEventListener('change', function () {
    if (!(inputEmail.value === '' || inputPass.value === '')) {
        buttLog.removeAttribute('disabled')
    } else {

        buttLog.setAttribute('disabled', true)
    }
})


inputEmailReg.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')

    } else {
        buttReg.setAttribute('disabled', true)
    }
})
inputPassReg.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')
    } else {

        buttReg.setAttribute('disabled', true)
    }
})
inputCPass.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')
    } else {

        buttReg.setAttribute('disabled', true)
    }
})


buttLog.onclick = function () {
    let login = document.getElementById('login-input').value
    let password = document.getElementById('password-input').value
    let validLogin = 0;
    let validPass = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email !== login) {
            continue
        }
        if (users[i].password !== password) {
            validPass += 1
            alert('неверный пароль')
            break
        } else {
            alert('добро пожаловать')
            validLogin += 1
            const main = document.getElementsByClassName('menu')
            main[0].style.display = "flex"
            let log = document.getElementsByClassName('login')
            log[0].style.display = 'none'
            break
        }

    }
    if (validPass !== 0) {
    } else if (validLogin == 0) {
        alert('неверный логин')
    }
}
function registration() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    log[0].style.visibility = 'hidden'
    log[0].style.position = 'absolute'
    reg[0].style.visibility = 'visible'
    reg[0].style.position = 'static'
}
let k = function login() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    reg[0].style.visibility = 'hidden'
    reg[0].style.position = 'absolute'
    log[0].style.visibility = 'visible'
    log[0].style.position = 'static'
}
buttReg.onclick = function () {
    let login = document.getElementById('login-input-reg').value
    let passw = document.getElementById('password-input-reg').value
    let cp = document.getElementById('cp').value
    console.log(login)
    console.log(passw)
    console.log(cp)
    let validLogin = 0
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == login) {
            validLogin += 1
            console.log('kek')
            alert('Существующий логин')
            break
        }
    }
    if (validLogin == 0) {
        if (passw == cp) {
            users.push({
                email: login,
                password: passw
            })
            console.log(users)
        }
    }
}

function back() {
    const main = document.getElementsByClassName('menu')
    main[0].style.display = "none"
    let log = document.getElementsByClassName('login')
    log[0].style.display = 'flex'
}

