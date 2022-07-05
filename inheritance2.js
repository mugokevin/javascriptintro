class Cow{
    constructor() {
        this.breed = "Fresian"
        this.gender ="male"
    }

}
class Animal extends Cow{
    constructor(color,price) {
        super();
        this.color = color
        this.price = price
    }
}
let jina = new Animal("black and white",50000)
document.writeln(jina.gender+ " " +jina.breed + " " + jina.color + " " + jina.price)

