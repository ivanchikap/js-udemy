// 1. Найти параграф и получить его текстовое содержимое (только текст!)
console.log('task-1');
const p = document.querySelector('p');
console.log(p.textContent);
// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
console.log('task-2');
function getNodeInfo(node) {
    if (!(node instanceof Element)) return 'it is not an element';

    const nodeType = node.nodeType;
    const nodeName = node.nodeName;
    const childCounts = node.childNodes.length || 0;
    return {
        nodeType,
        nodeName,
        childCounts
    }
}
console.log(getNodeInfo(document.body.firstChild));
const info = getNodeInfo(p);
console.log(info);
// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
const ul = document.querySelector('ul');
function getTextFromUl(el) {
    let [...links] = el.querySelectorAll('a') || [];


    return links.map(a => a.textContent);
}

console.log(getTextFromUl(ul));
// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let pChildNodes = document.querySelector('p').childNodes;

for (let node of pChildNodes) {
    if (node.nodeType !== 3) continue

    node.textContent = '-text-';
}