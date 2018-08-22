// Click a player button to choose as your Fighter
$(document).ready(function() {
  // Provide the initial players as objects with predefined hp and power
  // Be sure to adjust base power once first click occurs
  var characters = [dany, jonSnow, cersei, nightKing];
  var dany = [
    (name = "Danaerys Targaryen"),
    (attackPower = 120),
    (basePower = 20),
    (health = 120),
    $(".dany")
  ];
  var jonSnow = [
    (name = "Jon Snow"),
    (attackPower = 120),
    (basePower = 20),
    (health = 120),
    $(".jon")
  ];
  var cersei = [
    (name = "Cersei Lannister"),
    (attackPower = 120),
    (basePower = 20),
    (health = 120),
    $(".cersei")
  ];
  var nightKing = [
    (name = "Night King"),
    (attackPower = 120),
    (basePower = 20),
    (health = 120),
    $(".king")
  ];

  // var playerBtn = $("<div>");
  // Create an on click event attached to the player class
  $(".player").on("click", function() {
    for (var i = 0; i < characters.length; i++) {




    }



    
    var fighterOne = $("#fighter").length; // the first clicked player is equal to the first section div
    var fighterTwo = $("#enemies").length;
    var fighterThree = $("#defenders").length;
    var playerMagnet = $(".player");
    var jon = $(".jon");
    var dany = $(".dany");
    var king = $(".king");
    var cersei = $(".cersei");

    if (fighterOne >= 1) {
      $("#fighter").append($(dany));
    }
    if (fighterTwo >= 1) {
      $("#enemies").append($(jon));
    }
    if (fighterThree >= 1) {
      $("#defenders").append($(king));
      $("#defenders").append($(cersei));
    }
    // Create a variable playerMagnet and set equal to a new div

    console.log(playerMagnet);
    // Give each player div specific classes..............skip
    // attr acts as a setter and getter for attributes
    // playerMagnet.text($(this).attr("data-letter"));
    // append var to result div
    // $("#fighter").append(playerMagnet);
  });
  // Move Player to Fighter position on first click
  //   $(".player").on("click", function() {
  //     $("#").appendTo(player);
  //   });

  // Move first clicked player to Fighter Row
  // Remaining Players move to Enemies Row
  // Click on an Enemy player and move them to the Defender section
  // Press Attack Button to begin Combat
  // Defender hiddem when HP = 0
  // When there is no player to attack, Remind them
  // Set Players as Objects
  // Set order of events by click -- Character, Enemies, Defender, Attack button
  // Ordered Objects in an array and set them to each section
  // Attack points increase by base attack power ONLY for your chosen Fighter(first click)
  //
});
