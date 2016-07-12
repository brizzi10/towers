$(document).ready(function(){
  //starting disks at 4 since elements go 0-4
  var startingDisks=4;
  //each tower is its own object to constantly update info as game is played
  var towerOne={location:".first", topDisk:".one", totalDisks:startingDisks, highlighted:false};
  var towerTwo={location:".second ", topDisk:"", totalDisks: 0, highlighted:false};
  var towerThree={location:".third", topdisk:"", totalDisks: 0, highlighted: false};
//one click event for each tower, selectedTower set on click
  $(".first").on("click", function(){
    var selectedTower = towerOne;
    selectedTower.highlighted = highlight(selectedTower);
    diskPreview(selectedTower, towerOne, towerTwo, towerThree);
  })

  $(".second").on("click", function(){
    var selectedTower = towerTwo;
  })

  $(".third").on("click", function(){
    var selectedTower = towerThree;
    isLit = highlight(selectedTower);
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
    optionOne = towerTwo.location;
    optionTwo = towerThree.location;
  }
  else if(selectedTower==towerTwo){
    optionOne = towerOne.location;
    optionTwo = towerThree.location;
  }
  else {
    optionOne = towerOne.location;
    optionTwo = towerTwo.location;
  }
  //combining strings for jquery selector
  var nextLocationOne = optionOne + " " + selectedTower.topDisk;
  var nextLocationTwo = optionTwo + " " + selectedTower.topDisk;
  //adds the preview class to the relevant tower
  $(nextLocationOne).addClass("preview");
  $(nextLocationTwo).addClass("preview");
  //the preview disk div only toggles when the selectedTower is highlighted
  if(selectedTower.highlighted){
    $(optionOne).on("mouseenter", function(){
      $(nextLocationOne).toggle();
      //event listener inside mouseenter, since this is when a click to move disk would occur
      $(this).on("click", function(){
        diskMove(selectedTower.topDisk, nextLocationOne);
      })
    })
    $(optionOne).on("mouseleave", function(){
      $(nextLocationOne).toggle();
    })
    //move option two is set up identical to option one, since either could be chosen
    $(optionTwo).on("mouseenter", function(){
      $(nextLocationTwo).toggle();
      $(this).on("click", function(){
        diskMove(selectedTower.topDisk, nextLocationTwo);
      })
    })
    $(optionTwo).on("mouseleave", function(){
      $(nextLocationTwo).toggle();
    })
  }
  //if the selectedTower is not highlighted
  else {
    //user must have decided agaisnt there choice, so turn off the preview event listeners
    previewOff(nextLocationOne, nextLocationTwo);
  }
}
function diskMove(selectedTower, destination){
  $(selectedTower.topDisk).toggle();
  $(destination).removeClass("preview");
}
//function to turn off preview event listeners and remove the preview class from the optionOne and optionTwo divs
function previewOff(nextLocationOne, nextLocationTwo){
  $(nextLocationOne).removeClass("preview");
  $(nextLocationTwo).removeClass("preview");

  $(optionOne).off("mouseenter");
  $(optionOne).off("mouseleave");
  $(optionTwo).off("mouseenter");
  $(optionTwo).off("mouseleave");
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
