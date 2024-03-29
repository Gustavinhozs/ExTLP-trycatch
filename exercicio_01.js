/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch (erro){
      console.log(erro.message)
    }
  } 

  atributos() {
    if (this.nome != "" && this.idade != "" &&  this.especie != "")
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    }; else{
      throw new Error ("Está faltando alguma informação do seu animal...")
    }
  }
}

const meuAnimal = new Animal("", "");
const atributos = meuAnimal.mostrarAtributos();

// Imprimindo os atributos
// 