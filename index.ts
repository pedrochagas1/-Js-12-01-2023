class Animais {
    latir(): void{
        console.log("AUAUAUAUAU");
    }
    correr(): void{
        console.log("O animal está correndo")
    }

}
class Cachorros extends Animais {

}
let Cachorros = new Cachorros()
cachorro.latir()
/*
let ato = new Animal();
animal.latir();
animal.correr();
*/