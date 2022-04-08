// 1. Создать объект, который описывает ширину и высоту
//
// прямоугольника, а также может посчитать площадь фигуры:

    const rectangle = {
        width: 10,
        height: 20,
        getSquare() {
            return this.width * this.height
        },
};
console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также
//
// два метода: для получения цены и для расчета цены с учетом скидки:

    const price = {
        price: 10,
        discount: '15%',
        getPrice() {
            return this.price;
        },
        getPriceWithDiscount() {
          return this.price - this.price * parseInt(this.discount)/100;
        },
    };

console.log(price.getPrice()); // 10

console.log(price.getPriceWithDiscount()); // 8.5


// 3. Создать объект, у которого будет поле высота и метод “увеличить
//
// высоту на один”. Метод должен возвращать новую высоту:

const object = {
    height: 0,
    inc() {
        this.height++;
    }
};

console.log(object.height = 10);

object.inc(); // придумать свое название для метода

console.log(object.height); // 11;


// 4. Создать объект “вычислитель”, у которого есть числовое свойство
//
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
//
// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {

    value: 2,

    double: function () {
        this.value *= 2;
        return this;
    },

    plusOne: function () {
        this.value++;
        return this;
    },

    minusOne: function () {
        this.value--;
        return this;
    },

};

numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value); // 3

// 5. Создать объект с розничной ценой и количеством продуктов.
//
//     Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

// const apples = {
//     applePrice: 5,
//     count: 10,
//     getPrice() {
//         return this.applePrice * this.count;
//     }
// };
// console.log(apples.getPrice());

// 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

const apples = {
    price: 5,
    count: 10,
    getPrice() {
        return this.price * this.count;
    }
};

const details = {
    count: 2,
    price: 6
};

console.log(apples.getPrice.call(details));

//     Для этого “позаимствуйте” метод из предыдущего объекта.

// 7. Даны объект и функция:
//
    let sizes = {width: 5, height: 10},

    getSquare = function () {return this.width * this.height};

    console.log(getSquare.call(sizes));
//
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

// 8.
//
let element = {

    height: 25,

    getHeight: function () {return this.height;}

};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
