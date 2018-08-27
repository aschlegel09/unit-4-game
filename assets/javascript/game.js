// Execute this code when the DOM has fully loaded.
$(document).ready(function () {

	// object to hold our characters
	var characters = {
		"Danaerys Targaryen": {
			name: "Danaerys Targaryen",
			attackPower: 10,
			enemyPower: 19,
			health: 160,
			imageUrl: "assets/images/dany-225.png",
		},
		"Jon Snow": {
			name: "Jon Snow",
			attackPower: 14,
			enemyPower: 15,
			health: 120,
			imageUrl: "assets/images/jon_snow-225.png",
		},
		"Cersei Lannister": {
			name: "Cersei Lannister",
			attackPower: 8,
			enemyPower: 20,
			health: 180,
			imageUrl: "assets/images/cersei-lannister-225.png",
		},
		"Night King": {
			name: "Night King",
			attackPower: 11,
			enemyPower: 25,
			health: 220,
			imageUrl: "assets/images/night-king-225.png",
		}
	};
	
	// Will be populated when the player selects a character.
	var fighter;
	// Populated with all the characters the player didn't select.
	var defender = [];
	// Will be populated when the player chooses an opponent.
	var enemy;
	// Tracks number of defeated opponents.
	var killCount = 0;
	// Will keep track of turns during combat. Used for calculating player damage.
	var turnCounter = 1;

	
// Begin functions
	// This function will render a player card to the page.
	// The player character rendered, the area they are rendered to, and their status is determined by the arguments passed in.
	var renderPlayer = function (player, renderArea) {
		// This block of code builds the character card, and renders it to the page.
		var playerDiv = $("<div class='player' data-name='" + player.name + "'>");
		var playerName = $("<div class='player-name'>").text(player.name);
		var playerImage = $("<img alt='image' class='player-image'>").attr("src", player.imageUrl);
		var playerHealth = $("<div class='player-health'>").text(player.health);
		playerDiv.append(playerName).append(playerImage).append(playerHealth);
		$(renderArea).append(playerDiv);
	};

	// this function will load all the players into the players section to be selected
	var beginGame = function () {
		// Loop through the characters object and call the renderPlayer function on each player to render their card.
		for (var key in characters) {
			renderPlayer(characters[key], "#players-section");//use (object[key], "div #id")
		}
	};

	// remember to run the function here
	beginGame();
	
	// This function handles updating the selected player or the current defender. If there is no selected player/defender this
  // function will also place the character based on the areaRender chosen (e.g. #selected-character or #defender)
  var updatePlayer = function(playerObj, areaRender) {
    // First we empty the area so that we can re-render the new object
    $(areaRender).empty();
    renderPlayer(playerObj, areaRender);
  };
	
	// This function will render the available-to-attack enemies. This should be run once after a character has been selected
  var renderEnemies = function(enemyArr) {
    for (var i = 0; i < enemyArr.length; i++) {
      renderPlayer(enemyArr[i], "#other-enemy");// add div id to remaining enemy section
    }
  };
	
	// Function to handle rendering game messages.
  var renderMessage = function(message) {
    // Builds the message and appends it to the page.
    var gameMessageSet = $("#combat-display");// div id for attack section
    var newMessage = $("<div>").text(message);
    gameMessageSet.append(newMessage);
  };
	
  // Function which handles restarting the game after victory or defeat.
  var restartGame = function(resultMessage) {
    // When the 'Restart' button is clicked, reload the page.
    var restart = $("<button>Restart</button>").click(function() {
      location.reload();
    });
	  
	  // Build div that will display the victory/defeat message.
    var gameState = $("<div>").text(resultMessage);
	  
	  // Render the restart button and victory/defeat message to the page.
    $("body").append(gameState);
    $("body").append(restart);
  };
	
	// Function to clear the game message section
  var clearMessage = function() {
    var gameMessage = $("#combat-display");

    gameMessage.text("");
  };
// End of functions

	
	// Create an on click event attached to the player class
	// one to fighter, one to enemy, the others to defender
	// if the fighter is moved to the fighter div, set fighterchosen to true
	// if the enemy is moved to the enemy div, set enemychosen to true and
	// move the remaining players to defender
	$("#players-section").on("click", ".player", function () { //players section is div above fighter section
		 // Saving the clicked character's name.
    var name = $(this).attr("data-name");
		//check if we've chosen a fighter already
		if (!fighter) {
			 // We populate fighter with the selected character's information.
			fighter = characters[name];
		// We then loop through the remaining characters and push them to the defender array.
      for (var key in characters) {
        if (key !== name) {
          defender.push(characters[key]);
        }
      }
      // Hide the character select div.
      $("#players-section").hide();

      // Then render our selected character and our defender.
      updatePlayer(fighter, "#selected-character");//fighter-section character
      renderEnemies(defender);
    }
  });
	
	// Creates an on click event for each enemy.
  $("#other-enemy").on("click", ".player", function() {
    // Saving the opponent's name.
    var name = $(this).attr("data-name");

    // If there is no enemy, the clicked player will become the enemy.
    if ($("#enemy").children().length === 0) {
      enemy = characters[name];
      updatePlayer(enemy, "#enemy");

      // remove element as it will now be a new enemy
      $(this).remove();
      clearMessage();
    }
  });
	
	
	
	 // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {
    // If there is an enemy, combat will occur.
    if ($("#enemy").children().length !== 0) {
      // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + enemy.name + " for " + fighter.attackPower * turnCounter + " damage.";
      var counterAttackMessage = enemy.name + " attacked you back for " + enemy.enemyPower + " damage.";
      clearMessage();

      // Reduce defender's health by your attack value.
      enemy.health -= fighter.attackPower * turnCounter;

      // If the enemy still has health..
      if (enemy.health > 0) {
        // Render the enemy's updated player card.
        updatePlayer(enemy, "#enemy");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        fighter.health -= enemy.enemyPower;

        // Render the player's updated character card.
        updatePlayer(fighter, "#selected-character");

        // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (fighter.health <= 0) {
          clearMessage();
          restartGame("You have been defeated...GAME OVER!");
          $("#attack-button").off("click");
        }
      }
      else {
        // If the enemy has less than zero health they are defeated.
        // Remove your opponent's character card.
        $("#enemy").empty();

        var gameStateMessage = "You have defeated " + enemy.name + ", you can choose to fight another enemy.";
        renderMessage(gameStateMessage);

        // Increment your kill count.
        killCount++;

        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= defender.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame("You Won! GAME OVER!");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    }
    else {
      // If there is no enemy, render an error message.
      clearMessage();
      renderMessage("No enemy here.");
    }
  });
});
