let name             =   prompt('name?') || 'Johnny Sins';
let age              =   +prompt('age?') || 44;
let smokingFlag      =   confirm('smoking?');


let checkNameNumbers =  /\d/.test(name);
let checkAgeLetters  =  String(age).match(/[a-z]/i);

function survey(checkNameNumbers, checkAgeLetters) 

{

    if (checkNameNumbers || checkAgeLetters || checkNameNumbers && checkAgeLetters) {
        return 'somthing wrong!!!неправильно заполнили name или age'
    } else {
        if (age < 18 && !smokingFlag) {
            return `Молодець ${name}! Гарний приклад для своїх однолітків`
        }  else if (age < 18 && smokingFlag) {
            return `${name}, а твої батьки знають про це?`
        }  else if (age > 18 && !smokingFlag) {
            return `Супер ${name}! Мабуть ще й спортом займаєшся!`
        } else if (age > 18 && smokingFlag) {
            return `Що ж ${name}, це твій вібір. Але я не радив би курити`
        }
    }

}

console.log( survey(checkNameNumbers, checkAgeLetters) );
alert( survey(checkNameNumbers, checkAgeLetters) );
