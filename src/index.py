class Hero:
    def __init__(self, name, age, choice):
        self.name = name
        self.age = age
        self.choice = choice

    def atack(self):
        if self.choice == 1:
            ataque = "usou um arco e flecha"
        elif self.choice == 2:
            ataque = "usou magia"
        elif self.choice == 3:
            ataque = "usou uma espada"
        else:
            ataque = "usou um ataque desconhecido"
        print(f"O herói {self.name}, com {self.age} anos, {ataque}.")

# Entrada de dados do jogador
print("Welcome to the Game!")
print("------------------------")
hero_name = input("Type the hero name: ")
hero_age = input("Type the hero age: ")
print("------------------------")
print("Choose your hero:")
print("[1] Archer")
print("[2] Mage")
print("[3] Warrior")
choice = int(input("Type your choice (1-3): "))

# Criação do herói e ataque
hero = Hero(hero_name, hero_age, choice)
hero.atack()
