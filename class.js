
student = {name:"kevinmugo", dob:1994 , salary:100000, position:"developer"}
console.log(student.name + " " + student.dob + " " + student.salary + " " + student.position)

class Students{
    constructor(id,name,email,phone) {
        this.id= id
        this.name = name
        this.email = email
        this.phone = phone
    }
    mugo(){
        document.write(this.id+" " +this.email+ " "+ this.name+ " "+ this.phone+ "<br>")
    }
}
let name1 = new Students(1,"kevin","kevin@gmail.com",722456789)
let name2 = new Students(2,"lilian","lilian@gmail.com",722963852)

name1.mugo()
name2.mugo()