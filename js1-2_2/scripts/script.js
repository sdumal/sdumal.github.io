var names = [];
var user;
var flag = 0;

for (var i = 0; i < 5; i++) {
    names[i] = prompt("Введите любое имя");
}
user = prompt("Введите имя Пользователя");

for (var i = 0; i < 5; i++) {
    if ( names[i].toLowerCase() == user.toLowerCase() ) {
        flag = 1;
        break;
    }
}

if (flag) {
    alert(user+", Вы успешно вошли");
} else {
    alert("Пользователь не найден");
}
