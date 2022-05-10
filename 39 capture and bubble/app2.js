// 1. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

let drop = document.querySelectorAll('.dropdown-item');
let currentDropMenu = null

function handler(e) {
    let menu = e.currentTarget.querySelector('.dropdown-menu');

    const isAdd = menu.classList.toggle('d-none');

    if (currentDropMenu && currentDropMenu !== menu) {
        currentDropMenu.classList.add('d-none');
    }

    if (!isAdd) {
        currentDropMenu = menu;
    }
}


drop.forEach((d) => {
    d.addEventListener('click', handler)
})