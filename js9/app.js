class User {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
    }

    get age() {
        return this.ageInput();
    }

    get fullName() {
        return this.fullNameInput();
    }

    fullNameInput() {
        return this.name + " "  +this.surname
    }

    ageInput() {
        return new Date().getFullYear() - this.birthYear
    }
}

const dog = new User('alex', 'gavrylov', 2006)

console.log(dog.ageInput())
console.log(dog.fullNameInput())


class Student extends User {


    constructor(visitorArray, marksArray, number) {
        this._visitorArray = new Array(30).fill(null);
        this._marksArray = new Array(30).fill(null);
        this._number = number
        this._rating = rating
    }

    present() {
        const index = this.visitorArray.indexOf(null);
        if (index !== -1) {
            this.visitorArray[index] = true
        }
    }
    

    absent() {
        const index = this.marksArray.indexOf(null);
        if (index !== -1) {
            this.visitorArray[index] = false
        }
    }

    setMark(number) {
        let visit = number;
        const arrNum = new Array(30).fill(null);

        const index = arrNum.indexOf(null);
        if (index !== -1) {
            arrNum[index] = visit
        }
    }

    get mediumMark() {
        let sum = 0, average = 0;
        arrNum.map(i => {
            sum+=i
        })
        average = sum / arrNum.length;
        return average
    }


    get mediumVisit () {
        return this.rating
    }

    get summary() {
        if (this.rating > 0.9 && average > 9) {
            `Середня оцінка: ${average} cереднє відвідування: ${this.rating} Молодець! Так тримати!`
        }
        if (this.rating == 0.9 && average == 9) {
            `Середня оцінка: ${average} Середнє відвідування:  ${this.rating} Норм. Але можна постаратись і краще.`
        }
        if (this.rating < 0.9 && average < 9) {
            `Середня оцінка:  ${average} Середнє відвідування: ${this.rating} Погано! Так ти нічому не навчишся.`
        }
    }
}

class User extends Teacher {
    constructor (groups) {
        this.groups = new Array(30).fill(null);
    }

    addGroup({group}) {
        this.groups.push(group)
    } 

    changeStatus({group}) {
        group.active = true

    }

    get activeGroups() {
        return this.groups
    }
}

const g = new Student([])
console.log(g.present())



// let arr = [null, null, null, null]


// arr.findIndex((item, i) => { if (i == 2) arr[i] = true; });
// console.log(arr)