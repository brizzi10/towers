$(document).ready(function(){
  var startingDisks=4;

  var gameState="initial";

  var towerOne={
    location:".first",
    topDisk:".one",
    secondDisk:".two",
    thirdDisk:".three",
    fourthDisk:".four",
    fifthDisk:".five",
    totalDisks:startingDisks,
    highlighted:false};
    var towerTwo={
      location:".second ",
      topDisk:"",
      secondDisk:"",
      thirdDisk:"",
      fourthDisk:"",
      fifthDisk:"",
      totalDisks: 0,
      highlighted:false};
      var towerThree={
        location:".third",
        topdisk:"",
        secondDisk:"",
        thirdDisk:"",
        fourthDisk:"",
        fifthDisk:"",
        totalDisks: 0,
        highlighted: false};

        var selectedTower;
        var destinationTower;

        //one click event for each tower, selectedTower set on click
        $(".first").on("click", function(){
          if(gameState=="initial"){
            selectedTower = towerOne;
            selectedTower.highlighted = highlight(selectedTower);
            gameState="preview";
            diskPreview(selectedTower, towerOne, towerTwo, towerThree);
          }
        })

        $(".second").on("click", function(){
          if(gameState=="initial"){
            selectedTower = towerTwo;
            selectedTower.highlighted = highlight(selectedTower);
            gameState=="preview";
            diskPreview(selectedTower, towerOne, towerTwo, towerThree);
          }
        })

        $(".third").on("click", function(){
          if (gameState=="initial"){
            selectedTower = towerThree;
            selectedTower.highlighted = highlight(selectedTower);
            gameState=="preview"
            diskPreview(selectedTower, towerOne, towerTwo, towerThree);
          }
        })

        $(".first").on("mouseenter", function(){
          if(gameState=="preview" && !(selectedTower==towerOne)){
            var previewDisk = towerOne.location + " " + selectedTower.topDisk;
            $(previewDisk).toggle();
          }
        })

        $(".first").on("mouseleave", function(){
          if(gameState=="preview" && !(selectedTower==towerOne)){
            var previewDisk = towerOne.location + " " + selectedTower.topDisk;
            $(previewDisk).toggle();
          }
        })

        $(".second").on("mouseenter", function(){
          if(gameState=="preview" && !(selectedTower==towerTwo)){
            var previewDisk = towerTwo.location + " " + selectedTower.topDisk;
            console.log(previewDisk);
            $(previewDisk).toggle();
          }
        })

        $(".second").on("mouseleave", function(){
          if (gameState=="preview" && !(selectedTower==towerTwo)){
            var previewDisk = towerTwo.location + " " + selectedTower.topDisk;
            $(previewDisk).toggle();
          }
        })

        $(".third").on("mouseenter", function(){
          if(gameState=="preview" && !(selectedTower==towerThree)){
            var previewDisk = towerThree.location + " " + selectedTower.topDisk;
            console.log(previewDisk);
            $(previewDisk).toggle();
          }
        })

        $(".third").on("mouseleave", function(){
          if (gameState=="preview" && !(selectedTower==towerThree)){
            var previewDisk = towerThree.location + " " + selectedTower.topDisk;
            $(previewDisk).toggle();
          }
        })

        //one click event for each button on interface
        $(".up").on("click", function(){
          startingDisks = difficulty("up", startingDisks);
        })
        $(".down").on("click", function(){
          startingDisks =difficulty("down", startingDisks);
        })
        $(".reset").on("click", function(){
          startingDisks = 4;
          isLit = false;
          reset();
        })
      })

      //function to highlight the top disk of the selectedTower, returns boolean to update tower object
      function highlight(selectedTower){
        var location = selectedTower.location + " " + selectedTower.topDisk;
        if (selectedTower.highlighted){
          $(location).removeClass("highlight");
          return false;
        }
        else{
          $(location).addClass("highlight");
          return true;
        }
      }
      //function to create the disk preview image to show upcoming moves
      function diskPreview(selectedTower, towerOne, towerTwo, towerThree){
        //when a tower is selected, only two moves are possible
        if (selectedTower==towerOne){
          var optionOne = towerTwo.location;
          var optionTwo = towerThree.location;
        }
        else if(selectedTower==towerTwo){
          var optionOne = towerOne.location;
          var optionTwo = towerThree.location;
        }
        else {
          var optionOne = towerOne.location;
          var optionTwo = towerTwo.location;
        }
        //combining strings for jquery selector
        previewDiskOne = optionOne + " " + selectedTower.topDisk;
        previewDiskTwo = optionTwo + " " + selectedTower.topDisk;

        //adds the preview class to the relevant tower
        $(previewDiskOne).addClass("preview");
        $(previewDiskTwo).addClass("preview");
      }

      function diskMove(selectedTower, destination, towerOne, towerTwo, towerThree){
        var originalDisk = selectedTower.location + " " + selectedTower.topDisk;
        //toggles the original disk off and removes highlight
        $(originalDisk).toggle();
        $(originalDisk).removeClass("highlight");
        $(destination).removeClass("preview");
      }
      //function to update tower objects after move
      function updateTowers(selectedTower, destinationTower){

        selectedTower.highlight = false;
        selectedTower.totalDisks--;
        destinationTower.totalDisks++;

        destinationTower.fifthDisk = destinationTower.fourthDisk;
        destinationTower.fourthDisk = destinationTower.thirdDisk;
        destinationTower.thirdDisk = destinationTower.secondDisk;
        destinationTower.secondDisk = destinationTower.topDisk;
        destinationTower.topDisk = selectedTower.topDisk;

        selectedTower.topDisk = selectedTower.secondDisk;
        selectedTower.secondDisk = selectedTower.thirdDisk;
        selectedTower.thirdDisk = selectedTower.fourthDisk;
        selectedTower.fourthDisk = selectedTower.fifthDisk;
        selectedTower.fifthDisk = "";

      }
      //function to change the number of disks available
      function difficulty(change, startingDisks){
        if(change=="up"){
          if(startingDisks<4){
            startingDisks++;
            $(".disk").eq(startingDisks).toggle();
            return startingDisks;
          }
          else{
            console.log("it only goes up to 5 disks, don't be a nerd");
            return startingDisks;
          }
        }
        else if(change=="down"){
          if(startingDisks>0){
            $(".disk").eq(startingDisks).toggle();
            startingDisks--;
            return startingDisks;
          }
          else{
            console.log("Yes, I thought of this case. Nice try.");
            return startingDisks;
          }
        }
      }

      //resets the game board to its original state(all plates on leftmost tower)
      function reset(startingDisks){
        $(".first .disk.one").show();
        $(".first .disk.two").show();
        $(".first .disk.three").show();
        $(".first .disk.four").show();
        $(".first .disk.five").show();

        $(".second .disk.one").hide();
        $(".second .disk.two").hide();
        $(".second .disk.three").hide();
        $(".second .disk.four").hide();
        $(".second .disk.five").hide();

        $(".second .disk.one").hide();
        $(".second .disk.two").hide();
        $(".second .disk.three").hide();
        $(".second .disk.four").hide();
        $(".second .disk.five").hide();
        return;
      }
