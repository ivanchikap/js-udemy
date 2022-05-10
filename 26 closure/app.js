// 1.Создайте функцию которая бы умела делать:

function minus(var1 = 0) {
    return function (var2 = 0) {
        return var1 - var2
    }
}

console.log(minus(10)(6)); // 4

console.log(minus(5)(6)); // -1

console.log(minus(10)()); // 10

console.log(minus()(6)); // -6

console.log(minus()()); // 0

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
//

function multiplyMaker(startValue= 0) {
    let startVal = startValue;

    return function (val) {
        startVal *= val;
        return startVal;
    }
}

const multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)

console.log(multiply(1)); // 4 (4 * 1)

console.log(multiply(3)); // 12 (4 * 3)

console.log(multiply(10)); // 120 (12 * 10)


// 3. Реализовать модуль, который работает со строкой и имеет методы:
//
//     a. установить строку
//
// i. если передано пустое значение, то установить пустую строку
//
// ii. если передано число, число привести к строке
//
// b. получить строку
//
// c. получить длину строки
//
// d. получить строку-перевертыш
//
// Пример:
//
//     модуль.установитьСтроку(‘abcde’);
//
// модуль.получитьСтроку(); // ‘abcde’
//
// модуль.получитьДлину(); // 5

let strModule = (function() {
    let str = '';

    function setStr(val= '') {
        if (typeof val === 'number') val = Number(val);
        str = val;
    }

    function getStr() {
        return str;
    }

    function getStrLength() {
        return str.length;
    }

    function getReverseStr() {
        return str.split('').reverse().join('');
    }

    return {
        setStr,
        getReverseStr,
        getStr,
        getStrLength,
        getReverseStr
    }

})()

strModule.setStr('abcd');

console.log(strModule.getStr());
console.log(strModule.getStrLength());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
//
//
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:

//     модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

let calc = (function() {
    let num = 0;

    function setValue(value) {
        num = value;
        return this;
    }
    function plus(n) {
        num += n;
        return this;
    }
    function multiply(n) {
        num *= n;
        return this;
    }
    function pow(n) {
        num = Math.pow(num, n);
        return this
    }
    function getValue(value) {
        console.log(num);
        return this;
    }

    return {
        setValue,
        getValue,
        plus,
        multiply,
        pow
    }

}());

// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение();

calc.setValue(10).getValue().pow(2).getValue();