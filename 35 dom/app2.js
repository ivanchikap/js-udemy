// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//
//
//
//     isParent(parent, child);
//
// isParent(document.body.children[0], document.querySelector('mark'));
//
// // true так как первый див является родительским элементом для mark
//
//
//
// isParent(document.querySelector('ul'), document.querySelector('mark'));
//
// // false так ul НЕ является родительским элементом для mark
//
// Функция принимает только DOM объекты. Обязательно проверяйте это.

function isParent(parent, child) {
    // Проверяем что переданные элементы являются HTML элементами
    if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

    let isParent = false;
    let currentParent = child.parentElement;

    while(currentParent) {
        isParent = currentParent === parent
        if (isParent) {
            break;
        }

        currentParent = currentParent.parentElement;
    }

    return isParent;
}

isParent(document.body.children[0], document.querySelector('mark'));

// 2. Используя разметку из предыдущего задания.
//
// Получить список всех ссылок, которые не находятся внутри списка ul.
console.log('task-2');
const filteredLink = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLink);
// 3. Используя разметку из предыдущего задания.
//
// Найти элемент, который находится перед и после списка ul.
const ul = document.querySelector('ul');
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
