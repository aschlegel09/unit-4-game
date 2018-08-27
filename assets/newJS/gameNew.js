// Be sure to adjust base power once first click occurs
// Set Players as Objects
var dany = {
  name: "Danaerys Targaryen",
  attackPower: 65,
  basePower: 4,
  health: 160 + " hp",
  id: dany
};
var jonSnow = {
  name: "Jon Snow",
  attackPower: 60,
  basePower: 5,
  health: 120 + " hp",
  id: jonSnow
};
var cersei = {
  name: "Cersei Lannister",
  attackPower: 70,
  basePower: 3,
  health: 140 + " hp",
  id: cersei
};
var nightKing = {
  name: "Night King",
  attackPower: 90,
  basePower: 2,
  health: 180 + " hp",
  id: nightKing
};
// Provide the initial players as objects with predefined hp and power
var characters = [dany, jonSnow, cersei, nightKing];
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);
console.log(dany.name);
console.log("Jon Snow's health is " + jonSnow.health);
console.log("Cersei Lannister's attack power is " + cersei.attackPower);
console.log("The Night King's base power is " + nightKing.basePower);

var fighter = [];
var enemy = [];
var defender = [];
var combatDisplay = "";
var isFighterChosen = false;
var isEnemyChosen = false;
var isAttackPressed = false;
var calculateAttack = 0;
var gameWon = false;

// function to begin game
function beginGame() {
  fighter = "";
  enemy = "";
  defender = "";
  combatDisplay = "";
  isFighterChosen = false;
  isEnemyChosen = false;
  isAttackPressed = false;
  calculateAttack = 0;
  gameWon = false;

  $("#fighter, #enemy, #defender, #combat-display").empty();
}

// Create an on click event attached to the player class
// one to fighter, one to enemy, the others to defender
// if the fighter is moved to the fighter div, set fighterchosen to true
// if the enemy is moved to the enemy div, set enemychosen to true and
// move the remaining players to defender
$(".player").on("click", function() {
  //check if we've chosen a fighter already
  if (!isFighterChosen) {
    fighter += $(this);
    $("#fighter").append($(this));
    isFighterChosen = true;
    // $(this) += characters[i];
    $(this).off("click");
  } else {
    enemy += $(this);
    $("#enemy").append($(this));
    isEnemyChosen = true;
    // automatically send defenders to their section once enemy is chosen
    $("#defender").append($("#queue"));
    // do not allow click on defenders
    $(".player").off("click");
    // defender = $("#defender");
    // $("#defender").off("click");
  }
});

$("#attack").on("click", function() {
  // check if fighter and enemy have been chosen
  // or we've already won, we exit
  if (!isFighterChosen || !isEnemyChosen || gameWon) {
    return false;
  } else {//less we display combat begins
    console.log(event.target.textContent + event.detail);
    $("p#combat-display").text("Combat has ensued!");

    isEnemyChosen = true;
    isFighterChosen = true;
    gameWon = false;

    
        // Use parseInt to convert our string representation of numbers into actual integers
        fighter = parseInt(fighter);
        enemy = parseInt(enemy);


        if ($("#fighter").val("dany")) {
          console.log("my character is dany");
        } else if ($("#fighter").val("jon")) {
          console.log("my character is jon");
        } else if ($("#fighter").val("cersei")) {
          console.log("my character is cersei");
        } else if ($("#fighter").val("king")) {
          console.log("my character is nightking");
        };

        $("#combat-display").text(calculateAttack);

        // if (fighter.health = 0) {
        //   alert 
        // }
    // if (fighter.hp)
// calculate battle based on attack power and base attack power
// if fighter hp = 0, player loses the game, end all
// if enemy hp = 0, enemy is hidden and the next defender is added to enemy
  }
  // set isEnemyChosen to true so we can begin combat
  // isFighterChosen = true;
  // isEnemyChosen = true;
  // store off the combat calculations
  // calculateAttack = true;
  // set Html of #combat-display equal to the calculateAttack function
  // calculateAttack();
  // $("#combat-display").text($(calculateAttack));
});
