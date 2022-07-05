//declare a class

class Majina{
    //initializing our object
    constructor(nambari,jina,simu) {
        this.nambari = nambari
        this.jina = jina
        this.simu =simu
    }
    //declare method
    names(){
        document.write(this.nambari+ " " + this.jina + " " + this.simu + "<br>")
    }
}
//passing objects
let name1 = new Majina(10,"kevin",722456789)
let name2 = new Majina(20,"rose", 733789456)
let name3 = new Majina(30,"miriam", 745963852)
let name4 = new Majina(40,"paul",711333666)

name1.names()
name2.names()
name3.names()
name4.names()