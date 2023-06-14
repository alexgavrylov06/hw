let name    =   prompt('name?') || 'Johnny Sins';
let age     =   +prompt('age?') || 44;
let smokingFlag =   confirm('smoking?');


let checkNameNumbers =  /\d/.test(name);
let checkAgeLetters  =  String(age).match(/[a-z]/i);


if (checkNameNumbers || checkAgeLetters || checkNameNumbers && checkAgeLetters) {
    console.log('somthing wrong!!!неправильно заполнили name или age')
} else {
    if (age < 18 && !smokingFlag) {
        console.log(`Молодець ${name}! Гарний приклад для своїх однолітків`)
    }  else if (age < 18 && smokingFlag) {
        console.log(`${name}, а твої батьки знають про це?`)
    }  else if (age > 18 && !smokingFlag) {
        console.log( `Супер ${name}! Мабуть ще й спортом займаєшся!`)
    } else if (age > 18 && smokingFlag) {
        console.log( `Що ж ${name}, це твій вібір. Але я не радив би курити`)
    }
}
