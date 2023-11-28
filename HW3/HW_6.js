let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Користувачі зі статусом true
document.write('<h3>Users with status true:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write('<p>Name: ' + users[i].name + ', Age: ' + users[i].age + ', Status: ' + users[i].status + '</p>');
    }
}

// Користувачі зі статусом false
document.write('<h3>Users with status false:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write('<p>Name: ' + users[i].name + ', Age: ' + users[i].age + ', Status: ' + users[i].status + '</p>');
    }
}

// Користувачі старші за 30 років
document.write('<h3>Users older than 30:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write('<p>Name: ' + users[i].name + ', Age: ' + users[i].age + ', Status: ' + users[i].status + '</p>');
    }
}
