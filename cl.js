class Fish {
  #name;
  static #totalFishes = 0;

  static get totalFishes() {
    return Fish.#totalFishes;
  }

  constructor(weight, age, name) {
    Fish.#totalFishes++;
    this.weight = weight;
    this.age = age;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  swim() {
    return `${this.#name} is swimming!`;
  }
}

class Shark extends Fish {
  constructor(weight, age, name, kills = 0) {
    super(weight, age, name);
    this.kills = kills;
  }

  murder() {
    this.kills++;
    return `Why did you ask ${this.name} to do this? And then you say she is a monster!`;
  }
}

class HammerShark extends Shark {
  constructor(weight, age, name, headSize = 20, kills = 0) {
    super(weight, age, name, kills);
    this.headSize = headSize;
  }

  punch() {
    this.kills++;
    return `Why did you ask ${this.name} to do this?`;
  }
}

class Jelly extends Fish {
  constructor(weight, age, name, kills = 0) {
    super(weight, age, name);
    this.kills = kills;
  }

  poison() {
    this.kills++;
    return `its dead`;
  }

  glow() {
    return `${this.name} is glowing`;
  }
}

let nemo = new Fish(2, 3, "Nemo");
let dory = new Shark(2, 3, "Dory", 88);
let jello = new Jelly(2, 3, "Jello", 44);
let gills = new HammerShark(2, 3, "Gills", 88, 33);
