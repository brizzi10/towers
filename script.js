$(document).ready(function(){
  var isLit = false;
  startingDisks=4;
  $(".up").on("click", function(){
    startingDisks = difficulty("up", startingDisks);
  })
  $(".down").on("click", function(){
    startingDisks =difficulty("down", startingDisks);
  })
  $(".reset").on("click", function(){
    startingDisks = 4;
    reset();
  })
  $(".one").on("click", function(){
    var selectedColumn = ".first";
    var selectedDisk = "one";
    isLit = highlight(selectedDisk, isLit);
    diskPreview(selectedColumn, selectedDisk);
  })

  $(".two").on("click", function(){
    var selectedColumn = ".first";
    var selectedDisk = "two";
    isLit = highlight(selectedDisk, isLit);
    diskPreview(selectedColumn, selectedDisk);
  })

  $(".three").on("click", function(){
    var selectedColumn = ".first";
    var selectedDisk = "three";
    isLit = highlight(selectedDisk, isLit);
    diskPreview(selectedColumn, selectedDisk);
  })

  $(".four").on("click", function(){
    var selectedColumn = ".first";
    var selectedDisk = "four";
    isLit = highlight(selectedDisk, isLit);
    diskPreview(selectedColumn, selectedDisk);
  })

  $(".five").on("click", function(){
    var selectedColumn = ".first";
    var selectedDisk = "five";
    isLit = highlight(selectedDisk, isLit);
    diskPreview(selectedColumn, selectedDisk);
  })


})
function highlight(selectedDisk, isLit){
  diskNumber = "." + selectedDisk;
  if (isLit){
    $(diskNumber).css("border-color", "rgb(35, 15, 93)");

    return false;
  }
  else{
    $(diskNumber).css("border-color", "red");
    return true;
  }
}

function diskPreview(selectedColumn, selectedDisk){
  if (selectedColumn==".first"){
    optionOne = ".second";
    optionTwo = ".third";
  }
  else if(selectedColumn==".second"){
    optionOne = ".first";
    optionTwo = ".third";
  }
  else {
    optionOne = ".first";
    optionTwo = ".second";
  }
  $(optionOne).on("mouseenter", function(){
    var newdisk =  $("<div class='disk " + selectedDisk + " preview'></div>");
    $(optionOne).append(newdisk);
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
function diskMove(selectedColumn, selectedDisk){
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
