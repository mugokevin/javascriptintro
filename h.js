class Person{
    constructor() {
        this.height =  "6ft"
        this.age = 30
    }
}

class People extends Person{
    constructor(job,salary) {
        super();
        this.job = job
        this.salary = salary
    }
}

let me = new People("coder", 50000)
document.write(me.height + " " + me.age + " " + me.job + " " + me.salary)