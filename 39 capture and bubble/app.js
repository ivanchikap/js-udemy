// Вопросы к этому заданию
// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', () => alert(btnMsg.dataset.text));

//    2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', () => btnMsg.classList.add('bg-red'))
btnMsg.addEventListener('mouseleave', () => btnMsg.classList.remove('bg-red'))
//   3.  При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
let tag = document.getElementById('tag');
document.body.addEventListener("click", function (e) {
    tag.textContent = `Tag: ${e.target.nodeName} `;
})
//   4.  При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

let ul = document.querySelector('ul');
const btnGen = document.getElementById('btn-generate');

btnGen.addEventListener('click', function (e) {
    let liCount = ul.children.length;
    let li = document.createElement('li');
    li.textContent = `Item ${liCount + 1}`;
    ul.insertAdjacentElement('beforeend', li);
})
