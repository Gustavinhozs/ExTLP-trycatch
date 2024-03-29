/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch (erro){
      console.log(erro.message)
    }
  } 

  atributos() {
    if (this.nome != "" && this.idade != "" &&  this.turma != "")
    return {
      nome: this.nome,
      idade: this.idade,
      turma: this.turma
    }; else{
      throw new Error ("Está faltando alguma informação...")
    }
  }
}

const estudante = new Estudante("", "");
const atributos = estudante.mostrarAtributos();