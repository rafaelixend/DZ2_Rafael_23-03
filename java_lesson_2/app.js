// var login = 'RafaelA'
// var password = 'rafael0989'
//
// var userlogin = Number(prompt('Введите свой Login'))
// var userpassword = prompt('Введите свой пароль')
// if (userlogin === login && userpassword === userlogin) {
//     console.log('авторизация прошла успешно')
// }else {
//     console.log('error')
// }

var userINN = '12345678910111'
var innFirstNum = Number(userINN[0]) //1
if ((innFirstNum === 0 || innFirstNum === 1 || innFirstNum === 2) && userINN.length === 14) {
    console.log('ИНН найден')
}else{
    console.log('ИНН не существует')
}

var Size = 0
var euSize = 'M'
if(euSize === 'S'){
    console.log('В цифрах -> ', Size = 36)
}else if (euSize === 'M'){
    console.log('В цифрах M -> ', Size = 40 )
}else if (euSize === 'L'){
    console.log('В цифрах L -> ', Size = 44 )
}else {
    console.log('такого размера нет')
}

switch ('euSize'){
    case 'S':
    case 's':
        console.log('36')
        break;
    case 'M':
    case 'm':
        console.log('40')
    case 'L':
    case 'l':
        console.log('44')
        break;
    default:
        console.log('unknow size')
}


var userAddress = null
console.log(typeof userAddress)


let apple
console.log(typeof apple)

// var a = 123
// var b = 'qwerty'
// console.log(a%b)
// var num = NaN
// console.log(typeof num)

var user = {
    name: 'Rafael',
    surname: 'Abdykarov',
    phoneNumber: 996709453538,
    secondNumber: null,
    address: {
        city: 'Bishkek',
            street: undefined,
            car:{
            d:{
                f:{
                    d:'sd'
                }
            }
            }
    },
    isMarried: false,
    name: 'Rafael'
}
console.log(user.isMarried)
console.log(user.address.city)
console.log(user.address.car.d.f.d)
console.log(user.name[0])

user.laptop = 'mac'
console.log(user)

delete user.laptop
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name'))

