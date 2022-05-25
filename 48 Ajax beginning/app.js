// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

const apiURL = "https://jsonplaceholder.typicode.com";
// DOM Elements
const usersListEl = document.querySelector(".users-list");
const userInfoEl = document.querySelector(".user-info");

//DOM events
usersListEl.addEventListener('click', ({target}) => {
    if (target.dataset.userId) {
        const user = getUserInfoHTTP(target.dataset.userId, renderNewUserToList)
    }
});

function getUserInfoHTTP(id, callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiURL}/users/${id}`);

    xhr.addEventListener('load', () => {
       if (xhr.status !== 200) {
           console.log('status not 200');
           return;
       }
       const user = JSON.parse(xhr.responseText);
       callback(user);
    });

    xhr.send();
}

function renderNewUserToList(user) {
    if (!user.id) {
        console.log('no user');
        return
    }
    userInfoEl.innerHTML = '';
    const fragment = userInfoTemplate(user);
    userInfoEl.insertAdjacentHTML('afterbegin', fragment);
}


function getUsersHTTP(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiURL}/users`);

    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            console.log('status not 200');
            return
        }

        const res = JSON.parse(xhr.responseText);
        cb(res);
    });

    xhr.send();
}

function onGetUsersCallback(users) {
    if (!users.length || !Array.isArray(users)) {
        console.log('no users');
    }
    const fragment = users.reduce((acc, user) => acc + userListItemTemplate(user) ,'');

    usersListEl.insertAdjacentHTML('afterbegin', fragment);
}

function userListItemTemplate(user) {
    return `
        <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">${user.name}</button> 
    `;
}


function userInfoTemplate(user) {
    return `
        <div class="card border-dark mb-3">
        <div class="card-header">${user.name}</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${user.email}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
            <li class="list-group-item"><b>Website:</b> ${user.website}</li>
            <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
            <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
          </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
      </div>
    `;
}

//init App
getUsersHTTP(onGetUsersCallback);