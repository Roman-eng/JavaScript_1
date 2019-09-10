// 1 задание

var celsius = +prompt("Укажите температуру по Цельсию", 0);

function getFahrenheit (value) {
    var fahrenheit = (9 / 5) * value + 32;
    console.log(fahrenheit);
}

getFahrenheit(celsius);

// 2 задание

var admin, name;
name = 'Василий';
admin = name;

console.log(admin);