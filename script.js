$(document).ready(function(){
  var isLit = false;
  var startingDisks=4;

  $(".one").on("click", function(){
    var selectedTower = ".first";
    var selectedDisk = ".one";
    isLit = highlight(selectedTower, selectedDisk, isLit);
    if(isLit){
      diskPreview(selectedTower, selectedDisk);
    }
  })

  $(".two").on("click", function(){
    var selectedTower = ".first";
    var selectedDisk = ".two";
    isLit = highlight(selectedTower, selectedDisk, isLit);
    if(isLit){
      diskPreview(selectedTower, selectedDisk);
    }
  })

  $(".three").on("click", function(){
    var selectedTower = ".first";
    var selectedDisk = ".three";
    isLit = highlight(selectedTower, selectedDisk, isLit);
    return
  })

  $(".four").on("click", function(){
    var selectedTower = ".first";
    var selectedDisk = ".four";
    isLit = highlight(selectedTower, selectedDisk, isLit);
    }
  })

  $(".five").on("click", function(){
    var selectedTower = ".first";
    var selectedDisk = ".five";
    isLit = highlight(selectedTower, selectedDisk, isLit);
  })
  if(isLit){
    diskPreview(selectedTower, selectedDisk);
  }

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
  else if(selectedTower==".second"){
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
    console.log(selectedDisk);
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
