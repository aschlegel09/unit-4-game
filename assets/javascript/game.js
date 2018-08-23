// Click a player button to choose as your Fighter
$(document).ready(function() {
  // Provide the initial players as objects with predefined hp and power
  // Be sure to adjust base power once first click occurs
  var characters = ["Dany", "Jon Snow", "Cersei", "Night King"];
  console.log("My fav Game of Thrones characters are: " + characters);
	
	var dany = {
    name : "Danaerys Targaryen",
    attackPower : 120,
    basePower : 20,
    health : 120 + " hp",
//    $(".dany")
  };
  var jonSnow = {
    name : "Jon Snow",
    attackPower : 120,
    basePower : 20,
    health : 120 + " hp",
//    $(".jon")
  };
  var cersei = {
    name : "Cersei Lannister",
    attackPower : 120,
    basePower : 20,
    health : 120 + " hp",
//    $(".cersei")
  };
  var nightKing = {
    name : "Night King",
    attackPower : 120,
    basePower : 20,
    health : 120 + " hp",
//    $(".king")
  };
	console.log(dany.name);
	console.log("Jon Snow's health is " + jonSnow.health);
	console.log("Cersei Lannister's attack power is " + cersei.attackPower);
	console.log("The Night King's base power is " + nightKing.basePower);


	
 var fighterOne = $("#fighter").length; // the first clicked player is equal to the first section div
    var fighterTwo = $("#enemies").length;
    var fighterThree = $("#defenders").length;
    var playerMagnet = $(".player");
    var jonDiv = $(".jon");
    var danyDiv = $(".dany");
    var kingDiv = $(".king");
    var cerseiDiv = $(".cersei");
	
	
	
	
  // var playerBtn = $("<div>");
  // Create an on click event attached to the player class
  $("#danyId").on("click", function() {
	  // goes thru characters array of objects, and should find each one is linked to its specific character div
    for (var i = 0; i < danyDiv.length; i++) {
	//for each object in array...	
		console.log("My character is " + characters[i]);

    if (fighterOne >= 1) {
      $("#fighter").append($(danyDiv));
    }
    if (fighterTwo >= 1) {
      $("#enemies").append($(jonDiv));
    }
    if (fighterThree >= 1) {
      $("#defenders").append($(kingDiv));
      $("#defenders").append($(cerseiDiv));
    }
    // Create a variable playerMagnet and set equal to a new div

    console.log(playerMagnet);
    // Give each player div specific classes..............skip
    // attr acts as a setter and getter for attributes
    // playerMagnet.text($(this).attr("data-letter"));
    // append var to result div
    // $("#fighter").append(playerMagnet);
  }});
  // Move Player to Fighter position on first click
  //   $(".player").on("click", function() {
  //     $("#").appendTo(player);
  //   });

  // Move first clicked player to Fighter Row
  // Remaining Players move to Enemies Row
  // Click on an Enemy player and move them to the Defender section
   $(".attack").on("click", function() {
	  // Press Attack Button to begin Combat
	  //Event Handler: Return
	   console.log(event.target.textContent + event.detail);
	  $("p").text("Combat has ensued!");//need to adjust p tags in html
	   
	   
	  });
  // Defender hiddem when HP = 0
  // When there is no player to attack, Remind them
  // Set Players as Objects
  // Set order of events by click -- Character, Enemies, Defender, Attack button
  // Ordered Objects in an array and set them to each section
  // Attack points increase by base attack power ONLY for your chosen Fighter(first click)
  //
});
