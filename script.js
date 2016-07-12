$(document).ready(function(){
  var isLit = false;
  var selectedDisk;
  var selectedTower;
  var startingDisks=4;
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
  $(".one").on("click", function(){
    selectedTower = ".first";
    selectedDisk = ".one";
    isLit = highlight(selectedTower, selectedDisk, isLit);

    if(isLit){
      diskPreview(selectedTower, selectedDisk);
    }
  })

  $(".two").on("click", function(){
    selectedTower = ".first";
    selectedDisk = ".two";
    isLit = highlight(selectedTower, selectedDisk, isLit);
  })

  $(".three").on("click", function(){
    selectedTower = ".first";
    selectedDisk = ".three";
    isLit = highlight(selectedTower, selectedDisk, isLit);
  })

  $(".four").on("click", function(){
    selectedTower = "first";
    selectedDisk = ".four";
    isLit = highlight(selectedTower, selectedDisk, isLit);
  })

  $(".five").on("click", function(){
    selectedTower = ".first";
    selectedDisk = ".five";
    isLit = highlight(selectedTower, selectedDisk, isLit);
  })
  if(isLit){
    diskPreview(selectedTower, selectedDisk);
  }


})
function highlight(selectedTower, selectedDisk, isLit){
  var location = selectedTower + " " + selectedDisk;
  if (isLit){
    $(location).removeClass("highlight");
    return false;
  }
  else{
    $(location).addClass("highlight");
    return true;
  }
}

function diskPreview(selectedTower, selectedDisk){
  if (selectedTower==".first"){
    optionOne = ".second";
    optionTwo = ".third";
  }
  else if(selectedTower=="second"){
    optionOne = ".first";
    optionTwo = ".third";
  }
  else {
    optionOne = ".first";
    optionTwo = ".second";
  }
  var nextLocationOne = optionOne + " " + selectedDisk;
  var nextLocationTwo = optionTwo + " " + selectedDisk;
  $(nextLocationOne).addClass("preview");
  $(nextLocationTwo).addClass("preview");
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
  $(".game").on("click", function(){
    console.log("next phase");
  })
}
function diskMove(selectedTower, selectedDisk){
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
  $(".disk.one").show();
  $(".disk.two").show();
  $(".disk.three").show();
  $(".disk.four").show();
  $(".disk.five").show();
  return;
}
