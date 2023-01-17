"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isLogin = true;
class User {
    constructor(email, password, name, lastName) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
    }
}
addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e, _f;
    if (!!localStorage.getItem('user')) {
        (_a = document.getElementById('login-box')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        (_b = document.getElementById('loggout')) === null || _b === void 0 ? void 0 : _b.classList.add('active');
        (_c = document.getElementById('dashboard')) === null || _c === void 0 ? void 0 : _c.classList.add('active');
        getData();
    }
    else {
        (_d = document.getElementById('login-box')) === null || _d === void 0 ? void 0 : _d.classList.add('active');
        (_e = document.getElementById('loggout')) === null || _e === void 0 ? void 0 : _e.classList.remove('active');
        (_f = document.getElementById('dashboard')) === null || _f === void 0 ? void 0 : _f.classList.remove('active');
    }
});
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('../data/data.json')
            .then(res => res.json())
            .then(data => {
            const pay = [...data.pay];
            const cardContainer = document.getElementById('card-container');
            pay.forEach(e => {
                let cardElement = document.createElement('p');
                cardElement.innerHTML = `
                    <span>${e.name}</span>
                    <small>Vence em ${e.deadline}</small>
                    <span>R$ ${e.value}</span>
                `;
                cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(cardElement);
            });
        })
            .catch(err => console.log(err));
    });
}
function setIsLogin() {
    var _a, _b, _c;
    isLogin = !isLogin;
    (_a = document.getElementById('button-login')) === null || _a === void 0 ? void 0 : _a.classList.toggle('active');
    (_b = document.getElementById('button-register')) === null || _b === void 0 ? void 0 : _b.classList.toggle('active');
    (_c = document.getElementById('register-box')) === null || _c === void 0 ? void 0 : _c.classList.toggle('active');
}
function handleSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = new User(email, password);
    if (!isLogin) {
        const repeat = document.getElementById('repeat').value;
        if (repeat === password) {
            const name = document.getElementById('repeat').value;
            const lastName = document.getElementById('lastName').value;
            user.name = name;
            user.lastName = lastName;
            return false;
        }
        return false;
    }
    localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
    return false;
}
function loggout() {
    localStorage.removeItem('user');
    window.location.reload();
}
