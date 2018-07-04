$(() => {
    class Person {
        constructor(name, lastname, age, gender) {
            this.name = name
            this.lastname = lastname
            this.age = age
            this.gender = gender
        }
    }

    let p1 = new Person("João", "Carlos", 12, "masc");
    console.log(p1.name)
})