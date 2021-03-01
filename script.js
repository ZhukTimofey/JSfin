'use strict'
const users = [
    ['sadaw@abc.com', 'qwerty']
]
butt1.onclick = function () {
    let login = document.getElementById('login-input').value
    let password = document.getElementById('password-input').value
    if (login == false || password == false) {
        butt1.setAttribute("disabled", true)
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i][0] !== login) {
            alert('неверный логин')
            break
        }
        if (users[i][1] !== password) {
            alert('неверный пароль')
            break
        } else {
            alert('добро пожаловать')
            break
        }

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
butt2.onclick = function () {
    let login = document.getElementById('login-input-reg').value
    let password = document.getElementById('password-input-reg').value
    let cp = document.getElementById('cp').value
    console.log(login)
    console.log(password)
    console.log(cp)
    for (let i = 0; i < users.length; ++i) {
        if (users[i][0] == login) {
            alert('Существующий логин')
            break
        }
        if (users[i][1] == password) {
            alert('Существующий пароль')
            break;
        }

    }
    if (password == cp) {
        users.push([login, password])
        console.log(users)
        k()
    }
}

