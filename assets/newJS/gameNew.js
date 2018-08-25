// Provide the initial players as objects with predefined hp and power
  // Be sure to adjust base power once first click occurs
  var characters = ["Dany", "Jon Snow", "Cersei", "Night King"];
  console.log("My fav Game of Thrones characters are: " + characters);
  // Set Players as Objects
  var dany = {
    name: "Danaerys Targaryen",
    attackPower: 120,
    basePower: 20,
    health: 120 + " hp",
    Selection: ".dany"
  };
  var jonSnow = {
    name: "Jon Snow",
    attackPower: 120,
    basePower: 20,
    health: 120 + " hp",
    Selection: ".jon"
  };
  var cersei = {
    name: "Cersei Lannister",
    attackPower: 120,
    basePower: 20,
    health: 120 + " hp",
    Selection: ".cersei"
  };
  var nightKing = {
    name: "Night King",
    attackPower: 120,
    basePower: 20,
    health: 120 + " hp",
    Selection: ".king"
  };
  console.log(dany.name);
  console.log("Jon Snow's health is " + jonSnow.health);
  console.log("Cersei Lannister's attack power is " + cersei.attackPower);
  console.log("The Night King's base power is " + nightKing.basePower);
  var fighterOne = $("#fighter").length; // the first clicked player is equal to the first section div
  var enemyOne = $("#enemies").length;
  var defenderOne = $("#defenders").length;
  var playerMagnet = $(".player");
  var jonDiv = $(".jon");
  var danyDiv = $(".dany");
  var kingDiv = $(".king");
  var cerseiDiv = $(".cersei");
  // var playerBtn = $("<div>");
  // Create an on click event attached to the player class
  // Move Player to Fighter position on first click
  $("#danyId").on("click", function() {
    // goes thru characters array of objects, and should find each one is linked to its specific character div
    for (var i = 0; i < danyDiv.length; i++) {
      //for each object in array...
      console.log("My character is " + characters[0]);

      if (fighterOne >= 1) {
        $("#fighter").append($(danyDiv));
        $("p#firstClick").text("Choose Your Enemy.");
      }
      console.log(playerMagnet);
    }
  });
  $("#jonId").on("click", function() {
    for (var i = 0; i < jonDiv.length; i++) {
      console.log("My character is " + characters[1]);

      if (fighterOne >= 1) {
        $("#fighter").append($(jonDiv));
        $("p#firstClick").text("Choose Your Enemy.");
      }
    }
  });
  $("#cerseiId").on("click", function() {
    for (var i = 0; i < cerseiDiv.length; i++) {
      console.log("My character is " + characters[2]);
      if (fighterOne >= 1) {
        $("#fighter").append($(cerseiDiv));
        $("p#firstClick").text("Choose Your Enemy.");
      }
    }
  });
  $("#kingId").on("click", function() {
    for (var i = 0; i < kingDiv.length; i++) {
      console.log("My character is " + characters[3]);
      if (fighterOne >= 1) {
        $("#fighter").append($(kingDiv));
        $("p#firstClick").text("Choose Your Enemy.");
      }
    }
  });
  $(".attack").on("click", function() {
    // Press Attack Button to begin Combat
    //Event Handler: Return
    console.log(event.target.textContent + event.detail);
    $("p#combat-display").text("Combat has ensued!"); //need to adjust p tags in html
    // for loop that runs if they press the button, increment the attack power upwards for the fighter
    // another if statement that if the button is pressed, display the attack damage from defeneder, return new health level
    // inside that if statement, another if to determine if fighter hp is lower than 0, return you lose
    // if enemy hp is lower than 0,
    // Defender hiddem when HP = 0
    // dispay next enemy,
    // when there are no enemies, display you won
    //
  });
});

// if the danyDiv, jonDiv, cerseiDiv, kingDiv is equal to fighterDiv
// then on click brings chosen div to the enemy section
// and brings the remaining characters to the defender section
//
//apply this working code to second and third clicks
// $("#danyId").on("click", function() {
//   for (var i = 0; i < danyDiv.length; i++) {
//   console.log("My character is " + characters[i]);
//   if (enemyOne >= 1) {
//         $("#enemies").append($(jonDiv));
//       }
//       if (defenderOne >= 1) {
//         $("#defenders").append($(kingDiv));
//         $("#defenders").append($(cerseiDiv));
//       }}
// }});
