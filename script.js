
var hanoiDelay=1000;
var startingDisks=5;
$(document).ready(function(){

  var gameState="initial";
//creating objects to store relevant info for each tower
  var towerOne={
    location:".first",
    topDisk:".one",
    secondDisk:".two",
    thirdDisk:".three",
    fourthDisk:".four",
    fifthDisk:".five",
    totalDisks:5,
    topDiskValue:1,
    highlighted:false};
  var towerTwo={
    location:".second ",
    topDisk:"",
    secondDisk:"",
    thirdDisk:"",
    fourthDisk:"",
    fifthDisk:"",
    totalDisks: 0,
    topDiskValue:0,
    highlighted:false};
  var towerThree={
    location:".third",
    topdisk:"",
    secondDisk:"",
    thirdDisk:"",
    fourthDisk:"",
    fifthDisk:"",
    totalDisks: 0,
    topDiskValue:0,
    highlighted: false};

  var selectedTower;
  var destinationTower;

  //one click event for each tower, selectedTower set on click
  $(".first").on("click", function(){
    if(gameState=="initial" && towerOne.totalDisks>0){
      selectedTower = towerOne;
      highlight(selectedTower);
      gameState="preview";
      diskPreview(selectedTower, towerOne, towerTwo, towerThree);
    }
    else if(gameState=="preview" && selectedTower==towerOne){
      highlight(selectedTower);
      gameState="initial";
    }
    else if(gameState=="preview"){
      if(selectedTower.topDiskValue<towerOne.topDiskValue || towerOne.topDiskValue==0){
        destinationTower = towerOne;
        diskMove(selectedTower, destinationTower);
        gameState="initial";
        updateTowers(selectedTower, destinationTower);
        topDiskValue(towerOne);
        topDiskValue(towerTwo);
        topDiskValue(towerThree);
      }
    }
  })

  $(".second").on("click", function(){
    if(gameState=="initial" && towerTwo.totalDisks>0){
      selectedTower = towerTwo;
      highlight(selectedTower);
      gameState="preview";
      diskPreview(selectedTower, towerOne, towerTwo, towerThree);
    }
    else if(gameState=="preview" && selectedTower==towerTwo){
      highlight(selectedTower);
      gameState="initial";
    }
    else if(gameState=="preview"){
      if(selectedTower.topDiskValue<towerTwo.topDiskValue || towerTwo.topDiskValue==0){
        destinationTower = towerTwo;
        diskMove(selectedTower, destinationTower);
        gameState="initial";
        updateTowers(selectedTower, destinationTower);
        topDiskValue(towerOne);
        topDiskValue(towerTwo);
        topDiskValue(towerThree);
      }
    }
  })

  $(".third").on("click", function(){
    if(gameState=="initial" && towerThree.totalDisks>0){
      selectedTower = towerThree;
      highlight(selectedTower);
      gameState="preview";
      diskPreview(selectedTower, towerOne, towerTwo, towerThree);
    }
    else if(gameState=="preview" && selectedTower==towerThree){
      highlight(selectedTower);
      gameState="initial";
    }
    else if(gameState=="preview"){
      if(selectedTower.topDiskValue<towerThree.topDiskValue || towerThree.topDiskValue==0){
        destinationTower = towerThree;
        diskMove(selectedTower, destinationTower);
        gameState="initial";
        updateTowers(selectedTower, destinationTower);
        topDiskValue(towerOne);
        topDiskValue(towerTwo);
        topDiskValue(towerThree);
        if(startingDisks == towerThree.totalDisks){
          if(startingDisks== 1 || startingDisks==2){
            alert("You win... What a proud day for you and your family.");
          }
          else if(startingDisks==3){
            alert("You win... Let's step up the difficulty a little bit");
          }
          else if(startingDisks==4){
            alert("You win... Now try it on 5");
          }
          else if (startingDisks==5){
            alert("You win, WOOOOOOOOOOOOO")
          }
        }
      }
    }
  })
//mouseenter and mouseleave listeners for each column
  $(".first").on("mouseenter", function(){
    if(gameState=="preview" && !(selectedTower==towerOne)){
      if(selectedTower.topDiskValue<towerOne.topDiskValue || towerOne.topDiskValue==0){
        var previewDisk = towerOne.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  $(".first").on("mouseleave", function(){
    if(gameState=="preview" && !(selectedTower==towerOne)){
      if(selectedTower.topDiskValue<towerOne.topDiskValue || towerOne.topDiskValue==0){
        var previewDisk = towerOne.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  $(".second").on("mouseenter", function(){
    if(gameState=="preview" && !(selectedTower==towerTwo)){
      if(selectedTower.topDiskValue<towerTwo.topDiskValue || towerTwo.topDiskValue==0){
        var previewDisk = towerTwo.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  $(".second").on("mouseleave", function(){
    if (gameState=="preview" && !(selectedTower==towerTwo)){
      if(selectedTower.topDiskValue<towerTwo.topDiskValue || towerTwo.topDiskValue==0){
        var previewDisk = towerTwo.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  $(".third").on("mouseenter", function(){
    if(gameState=="preview" && !(selectedTower==towerThree)){
      if(selectedTower.topDiskValue<towerThree.topDiskValue || towerThree.topDiskValue==0){
        var previewDisk = towerThree.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  $(".third").on("mouseleave", function(){
    if (gameState=="preview" && !(selectedTower==towerThree)){
      if(selectedTower.topDiskValue<towerThree.topDiskValue || towerThree.topDiskValue==0){
        var previewDisk = towerThree.location + " " + selectedTower.topDisk;
        $(previewDisk).toggle();
      }
    }
  })

  //on click event for each button on interface
  $(".up").on("click", function(){
    startingDisks = difficulty("up", startingDisks, towerOne, towerTwo, towerThree);
  })
  $(".down").on("click", function(){
    startingDisks =difficulty("down", startingDisks, towerOne, towerTwo, towerThree);
  })
  $(".reset").on("click", function(){
    gameState="initial";
    isLit = false;
    reset();
    initialTowers(startingDisks, towerOne, towerTwo, towerThree);
  })
  $(".solve").on("click", function(){
    if(towerTwo.totalDisks==0 && towerThree.totalDisks==0){
      hanoi(startingDisks, towerOne, towerThree, towerTwo);
    }
    else {
      alert("Place all disks in the leftmost tower (or click restart)");
    }
  })
})

//function to highlight the top disk of the selectedTower, returns boolean to update tower object
function highlight(selectedTower){
  var location = selectedTower.location + " " + selectedTower.topDisk;
  if (selectedTower.highlighted){
    $(location).removeClass("highlight");
    selectedTower.highlighted=false;
  }
  else{
    $(location).addClass("highlight");
    selectedTower.highlighted=true;
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
//function that moves disks by toggling them on or off in the DOM
function diskMove(selectedTower, destinationTower){
  var originalDisk = selectedTower.location + " " + selectedTower.topDisk;
  var destinationDisk = destinationTower.location + " " + selectedTower.topDisk;
  //toggles the original disk off and removes highlight
  $(originalDisk).toggle();
  $(originalDisk).removeClass("highlight");
  $(destinationDisk).removeClass("preview");
}
//function to update tower objects after move
function updateTowers(selectedTower, destinationTower){
  selectedTower.highlighted = false;
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
//the top disk needs a value so that it can be compared with other sizes when moving
function topDiskValue(tower){
  if(tower.topDisk==".one"){
    tower.topDiskValue=1;
  }
  else if(tower.topDisk==".two"){
    tower.topDiskValue=2;
  }
  else if(tower.topDisk==".three"){
    tower.topDiskValue=3;
  }
  else if(tower.topDisk==".four"){
    tower.topDiskValue=4;
  }
  else if(tower.topDisk==".five"){
    tower.topDiskValue=5;
  }
  else{
    tower.topDiskValue=0;
  }
}
//function to change the number of disks available
function difficulty(change, startingDisks, towerOne, towerTwo, towerThree){
  if(change=="up"){
    if(startingDisks<5){
      startingDisks++;
      towerOne.totalDisks++;
      $(".first .disk").eq(startingDisks-1).toggle();
      return startingDisks;
    }
    else{
      alert("It only goes up to 5 disks, don't be a nerd");
      return startingDisks;
    }
  }
  else if(change=="down"){
    if(startingDisks>1){
      $(".first .disk").eq(startingDisks-1).toggle();
      startingDisks--;
      towerOne.totalDisks--;
      return startingDisks;
    }
    else{
      alert("Yes, I thought of this case. Nice try.");
      return startingDisks;
    }
  }
}

//resets the game board to its original state(all plates on leftmost tower)
function reset(selectionTower, destinationTower){
  hanoiDelay=1000;
  startingDisks = 5;
  $(".disk").removeClass("highlight");
  $(".disk").removeClass("preview");
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

  $(".third .disk.one").hide();
  $(".third .disk.two").hide();
  $(".third .disk.three").hide();
  $(".third .disk.four").hide();
  $(".third .disk.five").hide();
}
//sets all towers to their initial states, used by the reset button
function initialTowers(startingDisks, towerOne, towerTwo, towerThree){
  towerOne.topDisk=".one";
  towerOne.secondDisk=".two";
  towerOne.thirdDisk=".three";
  towerOne.fourthDisk=".four";
  towerOne.fifthDisk=".five";
  towerOne.totalDisks=startingDisks;
  towerOne.highlighted=false;
  towerOne.topDiskValue=1;

  towerTwo.topDisk="";
  towerTwo.secondDisk="";
  towerTwo.thirdDisk="";
  towerTwo.fourthDisk="";
  towerTwo.fifthDisk="";
  towerTwo.totalDisks=0;
  towerTwo.highlighted=false;
  towerTwo.topDiskValue=0;

  towerThree.topDisk="";
  towerThree.secondDisk="";
  towerThree.thirdDisk="";
  towerThree.fourthDisk="";
  towerThree.fifthDisk="";
  towerThree.totalDisks=0;
  towerThree.highlighted=false;
  towerThree.topDiskValue=0;
}
//recursive algorithm to solve the tower
function hanoi(totalDisks, source, destination, auxiliary){
  if(totalDisks == 1){
    hanoiMove(source, destination);
  }
  else{
    hanoi(totalDisks-1, source, auxiliary, destination);
    hanoiMove(source, destination);
    hanoi(totalDisks-1, auxiliary, destination, source);
  }
}
//nearly identical to diskMove, but uses setTimeout to demonstrate moves to user
function hanoiMove(selectedTower, destinationTower){
  //waits the delay amount of time to do the specific move
  setTimeout(function(){
    var originalDisk = selectedTower.location + " " + selectedTower.topDisk;
    var destinationDisk = destinationTower.location + " " + selectedTower.topDisk;
    //toggles the original disk off and moved disk on
    $(originalDisk).toggle();
    $(destinationDisk).toggle();
    updateTowers(selectedTower, destinationTower);
  }, hanoiDelay)
  //since all hanoiMove functions are called nearly simultaneously, to stagger them by one second each
  //subsequent delay value must increment by 1000
  hanoiDelay+=1000;
}
