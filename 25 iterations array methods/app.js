// Вопросы к этому заданию
// 1.На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//
//     каждый элемент которого будет хранить информацию о числе и его четности:
//
//     [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
//
console.log('task-1');
let arr1 = [1,2,3,5,8,9,10];

let res1 = arr1.map(num => ({digit: num, odd: num%2 !== 0}));

console.log(res1);

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
console.log('task-2');
const arr2 = [12, 4, 50, 1, 0, 18, 40];
console.log(arr2.some(num => num === 0));

// 3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

console.log('task--3');
const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];

console.log(arr3.every(word => word.length > 3));

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

const arr4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
//
//
//
// Напишите функцию, которая из элементов массива соберет и вернёт
//
// строку, основываясь на index каждой буквы. Например:
//
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
console.log('task-4');

function getString(arr) {
    let operatedArr = arr.slice();

    return operatedArr
        .sort((prev, next) => prev.index - next.index)
        .reduce((acc, { char }) => acc + char, '');
}

console.log(getString(arr4));

// 5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
const arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ];
arr5.sort((prev, next) => prev.length - next.length);
console.log(arr5);
// 6. Есть массив объектов://

console.log('task-6');

 const arr6 =   [

        {cpu: 'intel', info: {cores:2, cache: 3}},

        {cpu: 'intel', info: {cores:4, cache: 4}},

        {cpu: 'amd', info: {cores:1, cache: 1}},

        {cpu: 'intel', info: {cores:3, cache: 2}},

        {cpu: 'amd', info: {cores:4, cache: 2}}

    ]
//
//
//
// Отсортировать их по возрастающему количеству ядер (cores).

arr6.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(arr6);
// 7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
console.log('task-7');
let products = [

    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},

    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}

];
//
//
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
//
function filterCollection(arr, price1, price2) {
    const array = arr.slice();
    return array
        .filter((item => (item.price >= price1 && item.price <= price2)))
        .sort((prev, next) => prev.price - next.price)
}

let res7 = filterCollection(products, 15, 30);
console.log(res7);