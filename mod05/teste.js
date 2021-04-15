/**
 * Dado a classe, class Test { hello() { console.log('Olá')} }.Quais são as possíveis formas invocar a função hello? *

 */

// class Test {
//     hello() {
//         console.log('Ola')
//     }
// }
//  new Test().hello()
//  new Test()['hello']()


 /**
  * Dado a classe, class Test { static hello() { console.log('Olá')} }. Quais são as possíveis formas invocar a função hello? *

  */

//  class Test {
//      static hello() {
//           console.log('Olá ')}
//  }
//  Test.hello()
//  Test['hello']()


/**
 * Dado a classe, class Test { constructor(nome) { this.nome = nome, this.idade = 18 } }. Quantas propriedades ela terá após sua inicialização? *
 * 
 */

class Test {
    constructor(nome) {
        this.nome = nome;
        this.idade = 18;
    }
}
