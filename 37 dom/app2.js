// Вопросы к этому заданию
// 1. Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list');
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
document.querySelector('ul ~ a').id = 'link';
// 3. На li через один (начиная с самого первого) установить класс “item”
for (let i = 0; i < ul.children.length; i++) {
    if (i%2) continue;
    ul.children[i].classList.add('item');
}
// 4. На все ссылки в примере установить класс “custom-link”

const [...allLinks] = document.links;
allLinks.forEach(link => link.classList.add('custom-link'));