$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "blue"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height)
   createPlatform(300, 700, 100, 10, "purple")
   createPlatform(400, 600, 100, 10, "blue")
   createPlatform(500, 500, 150, 10, "purple")
   createPlatform(600, 400, 150, 10, "blue")
   createPlatform(400, 300, 150, 10, "purple")
   
   //createCannon(wallLocation, position, timeBetweenShots, width, height)
createCannon("top", 600, 1500)
createCannon("left", 300, 1500)
    // TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and .99)
//type can be any of these. In "". database diamond grace kennedi max steve

createCollectable("grace", 700, 100, 1, 0)
createCollectable("database", 400, 100, 1, 0)
createCollectable("steve", 550, 100, 1, 1)

    // TODO 4 - Create Cannons






    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
