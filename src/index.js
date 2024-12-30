// Classe Heroi
class Heroi {
    // Propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem de ataque com base no tipo
    atacar() {
      let ataque;
      // Verifica o tipo do herói e define o ataque apropriado
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque desconhecido";
      }
  
      // Mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Dados do herói ao usuário
  const nomeHeroi = prompt("Digite o nome do herói:");
  const idadeHeroi = parseInt(prompt("Digite a idade do herói:"));
  const tipoHeroi = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");
  
  // Instância da classe Heroi com os dados fornecidos
  const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
  
  // Método atacar
  heroi.atacar();
  