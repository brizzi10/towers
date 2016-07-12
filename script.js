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
    selectedTower = ".tower-1";
    selectedDisk = ".one";
    isLit = highlight(selectedDisk, isLit);
    // if(isLit){
    //   diskPreview(selectedTower, selectedDisk);
    // }
    // else(){
    //
    // }
  })

  $(".two").on("click", function(){
    selectedTower = ".tower-1";
    selectedDisk = ".two";
    isLit = highlight(selectedDisk, isLit);
  })

  $(".three").on("click", function(){
    selectedTower = ".tower-1";
    selectedDisk = ".three";
    isLit = highlight(selectedDisk, isLit);
  })

  $(".four").on("click", function(){
    selectedTower = ".tower-1";
    selectedDisk = ".four";
    isLit = highlight(selectedDisk, isLit);
  })

  $(".five").on("click", function(){
    selectedTower = ".tower-1";
    selectedDisk = ".five";
    isLit = highlight(selectedDisk, isLit);
  })


})
function highlight(selectedDisk, isLit){
  if (isLit){
    $(selectedDisk).css("border-color", "rgb(35, 15, 93)");
    console.log(selectedDisk + "light off");
    return false;
  }
  else{
    $(selectedDisk).css("border-color", "red");
    console.log(selectedDisk + "light on");
    return true;
  }
}

function diskPreview(selectedTower, selectedDisk){
  if (selectedTower==".tower-1"){
    optionOne = ".second";
    optionTwo = ".third";
  }
  else if(selectedTower==".tower-2"){
    optionOne = ".first";
    optionTwo = ".third";
  }
  else {
    optionOne = ".first";
    optionTwo = ".second";
  }
  $(optionOne).on("mouseenter", function(){
    $(optionOne.disk).toggle();
  })
  $(optionOne).on("mouseleave", function(){
    $(".disk." + selectedDisk + ".preview").remove();
  })
  $(optionTwo).on("mouseenter", function(){
    var newdisk =  $("<div class='disk " + selectedDisk + " preview'></div>");
    $(optionTwo).append(newdisk);
  })
  $(optionTwo).on("mouseleave", function(){
    $(".disk." + selectedDisk + ".preview").remove();
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
