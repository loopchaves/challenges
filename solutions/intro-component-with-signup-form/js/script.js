function newUser() {
    const url = new URL(window.location.href);
    const firstName = url.searchParams.get('first-name');
    const lastName = url.searchParams.get('last-name');
    const email = url.searchParams.get('email');
    const password = url.searchParams.get('password');
    if (firstName && lastName && email && password) {
        alert('# New user #\n\nName: ' + firstName + ' ' + lastName + '\nEmail: ' + email + '\nPassword: ' + password);
        window.location.assign(window.location.pathname);
    }
}

newUser();

function inputListener(id, obj) {
    obj.addEventListener('input', (event) => {
        if (obj.validity.valid) {
            obj.className = '';
            const error = document.getElementById(id + '-error');
            error.innerHTML = '';
            error.className = 'error';
        }
    });
}

const inputs = ['first-name', 'last-name', 'email', 'password'];
var objects = [];

for (var i in inputs) {
    const obj = document.getElementById(inputs[i]);
    inputListener(inputs[i], obj);
    objects[i] = obj;
}

const form = document.getElementById('signup');
const errorMsg = [
    'First Name cannot be empty',
    'Last Name cannot be empty',
    'Looks like this is not an email',
    'Password cannot be empty'
];

form.addEventListener('submit', (event) => {
    for (var obj in objects) {
        if (!objects[obj].validity.valid) {
            objects[obj].className = 'invalid';
            const error = document.getElementById(inputs[obj] + '-error');
            error.innerHTML = errorMsg[obj];
            error.className = 'error active';
            event.preventDefault();
        }
    }
});