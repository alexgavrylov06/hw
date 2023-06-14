let name = prompt('name?') || 'Johnny Sins';
let age = prompt('age?') || 44;
let smoking = confirm('smoking?');

if (age < 18 && !smoking) {
    console.log(`Молодець ${name}! Гарний приклад для своїх однолітків`)
}  else if (age < 18 && smoking) {
    console.log(`${name}, а твої батьки знають про це?`)
}  else if (age > 18 && !smoking) {
    console.log( `Супер ${name}! Мабуть ще й спортом займаєшся!`)
} else if (age > 18 && smoking) {
    console.log( `Що ж ${name}, це твій вібір. Але я не радив би курити`)
}