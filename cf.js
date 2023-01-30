let Fish = (() => {
  let totalFishes = 0;
  function Fish(weight, age, name) {
    if (!new.target) return new Fish(weight, age);
    totalFishes++;
    this.weight = weight;
    this.age = age;
    this.getName = function () {
      return name;
    };
  }

  Fish.getTotalFishes = function () {
    return totalFishes;
  };
  return Fish;
})();

Fish.prototype.swim = function () {
  return `${this.getName()} is swimming!`;
};

function Shark(weight, age, name, kills = 0) {
  let parent = new Fish(weight, age, name);
  parent.kills = kills;
  Object.setPrototypeOf(parent, Shark.prototype);
  return parent;
}
Object.setPrototypeOf(Shark, Fish);
Object.setPrototypeOf(Shark.prototype, Fish.prototype);

Shark.prototype.murder = function () {
  this.kills++;
  return `Why did you ask ${this.getName()} to do this? And then you say she is a monster!`;
};

function HammerShark(weight, age, name, headSize = 20, kills = 0) {
  let parent = new Shark(weight, age, name, kills);
  parent.headSize = headSize;
  Object.setPrototypeOf(parent, HammerShark.prototype);
  return parent;
}
Object.setPrototypeOf(HammerShark, Shark);
Object.setPrototypeOf(HammerShark.prototype, Shark.prototype);

Shark.prototype.punch = function () {
  this.kills++;
  return `Why did you ask ${this.getName()} to do this?`;
};

function Jelly(weight, age, name, kills) {
  let parent = new Fish(weight, age, name);
  parent.kills = kills;
  Object.setPrototypeOf(parent, Jelly.prototype);
  return parent;
}
Object.setPrototypeOf(Jelly, Fish);
Object.setPrototypeOf(Jelly.prototype, Fish.prototype);

Jelly.prototype.glow = function () {
  return `${this.getName()} is glowing`;
};
Jelly.prototype.poison = function () {
  this.kills++;
  return `its dead`;
};

let nemo = new Fish(2, 3, "Nemo");
let dory = new HammerShark(5, 5, "Dory", 21, 7);
let gills = new Jelly(5, 5, "Gills", 100);
