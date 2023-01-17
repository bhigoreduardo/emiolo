let isLogin: boolean = true;

class User {
    constructor(
        public email: string,
        public password: string,
        public name?: string,
        public lastName?: string,
    ) { }
}

addEventListener('DOMContentLoaded', () => {
    if (!!localStorage.getItem('user')) {
        document.getElementById('login-box')?.classList.remove('active');
        document.getElementById('loggout')?.classList.add('active');
        document.getElementById('dashboard')?.classList.add('active');
        getData();
    } else {
        document.getElementById('login-box')?.classList.add('active');
        document.getElementById('loggout')?.classList.remove('active');
        document.getElementById('dashboard')?.classList.remove('active');
    }
})

async function getData() {
    await fetch('../data/data.json')
        .then(res => res.json())
        .then(data => {
            const pay: any[] = [...data.pay];
            const cardContainer = document.getElementById('card-container');

            pay.forEach(e => {
                let cardElement = document.createElement('p');

                cardElement.innerHTML = `
                    <span>${e.name}</span>
                    <small>Vence em ${e.deadline}</small>
                    <span>R$ ${e.value}</span>
                `;

                cardContainer?.appendChild(cardElement);
            });
        })
        .catch(err => console.log(err))
}

function setIsLogin(): void {
    isLogin = !isLogin;
    document.getElementById('button-login')?.classList.toggle('active');
    document.getElementById('button-register')?.classList.toggle('active');
    document.getElementById('register-box')?.classList.toggle('active');
}

function handleSubmit(): boolean {
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;

    const user: User = new User(email, password);

    if (!isLogin) {
        const repeat: string = (document.getElementById('repeat') as HTMLInputElement).value;

        // FAKE REGISTER
        if (repeat === password) {
            const name: string = (document.getElementById('repeat') as HTMLInputElement).value;
            const lastName: string = (document.getElementById('lastName') as HTMLInputElement).value;

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

function loggout(): void {
    localStorage.removeItem('user');
    window.location.reload();
}
