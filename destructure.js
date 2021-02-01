const player = {
  name: "Messi",
  age: 33,
  club: "FC Barcelona",
  nation: "Argentina",
  teamMates: ["Frank De Jong", "Grizman", "Pedri"],
};

// old way to access object property
// console.log(player.name, player.club);

const { club, nation } = player;
console.log(club, nation);

// array destructuring also can be done but it will pick in order
