$(document).ready(function(){
  var startingDisks=4;
  var towerOne={location:".first", topDisk:".one", totalDisks:startingDisks, highlighted:false};
  var towerTwo={location:".second ", topDisk:"", totalDisks: 0, highlighted:false};
  var towerThree={location:".third", topdisk:"", totalDisks: 0, highlighted: false};

  $(".first").on("click", function(){
    var selectedTower = towerOne;
    selectedTower.highlighted = highlight(selectedTower);
    diskPreview(selectedTower, towerOne, towerTwo, towerThree);
    diskMove(selectedTower);
  })

  $(".second").on("click", function(){
    var selectedTower = towerTwo;
  })

  $(".third").on("click", function(){
    var selectedTower = towerThree;
    isLit = highlight(selectedTower);
  })

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

function diskPreview(selectedTower, towerOne, towerTwo, towerThree){
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

  var nextLocationOne = optionOne + " " + selectedTower.topDisk;
  var nextLocationTwo = optionTwo + " " + selectedTower.topDisk;
  $(nextLocationOne).addClass("preview");
  $(nextLocationTwo).addClass("preview");

  if(selectedTower.highlighted){
    $(optionOne).on("mouseenter", function(){
      $(nextLocationOne).toggle();
    })
    $(optionOne).on("mouseleave", function(){
      $(nextLocationOne).toggle();
    })
    $(optionTwo).on("mouseenter", function(){
      $(nextLocationTwo).toggle();
    })
    $(optionTwo).on("mouseleave", function(){
      $(nextLocationTwo).toggle();
    })
  }
  else {
    $(nextLocationOne).removeClass("preview");
    $(nextLocationTwo).removeClass("preview");
    $(optionOne).off("mouseenter");
    $(optionOne).off("mouseleave");
    $(optionTwo).off("mouseenter");
    $(optionTwo).off("mouseleave");
  }
}
function diskMove(selectedTower){

}

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
