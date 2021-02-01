// function constructor
function Player(name, age, club, nation, role) {
  this.name = name;
  this.age = age;
  this.club = club;
  this.nation = nation;
  this.role = role;
}

const playerOne = new Player(
  "Messi",
  33,
  "FC Barcelona",
  "Argentina",
  "Playmaker"
);
const playerTwo = new Player(
  "Suarez",
  34,
  "Athletico Madrid",
  "Uruguay",
  "Striker"
);

// console.log(playerOne, playerTwo);

// new method in a easy way with js class
class PlayerDetails {
  constructor(name, club, nation) {
    this.name = name;
    this.club = club;
    this.nation = nation;
  }
}

const playerDetailsOne = new PlayerDetails("Aguaero", "Man City", "Argentina");
const playerDetailsTwo = new PlayerDetails(
  "Kavin Du Bryan",
  "Man City",
  "Belgium"
);

console.log(playerDetailsOne, playerDetailsTwo);
