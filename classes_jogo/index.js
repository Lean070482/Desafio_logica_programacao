class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    // Estrutura de decisão
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando objetos (instâncias)
const heroi1 = new Heroi("Leandro", 43, "mago");
const heroi2 = new Heroi("Ryu", 30, "guerreiro");
const heroi3 = new Heroi("Lee", 28, "monge");
const heroi4 = new Heroi("Hanzo", 35, "ninja");

// Chamando o método
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();