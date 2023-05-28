class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos(){
    try{
      return this.atributos();
    } catch (erro){
      console.log(erro.message)
    }
  } 

  atributos() {
    if (this.estudante != "" && this.cosplay != "" &&  this.nota_cosplay != "")
    return {
      nome: this.estudante,
      idade: this.cosplay,
      turma: this.nota_cosplay
    }; else{
      throw new Error ("Está faltando alguma informação...")
    }
  }
}

const aluno = new NerdIF("", "");
const atributos = aluno.retornarAtributos();