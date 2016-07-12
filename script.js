$(document).ready(function(){
  var isLit = false;
  var startingDisks=4;
  var topDiskOne=".one";
  var topDiskTwo="";
  var topDiskThree="";
  $(".first").on("click", function(){
    var selectedTower = ".first";
    isLit = highlight(selectedTower, isLit);
    if(isLit){
      diskPreview(selectedTower, isLit);
    }
  })

  $(".second").on("click", function(){
    var selectedTower = ".second";
    isLit = highlight(selectedTower, isLit);
    if(isLit){
      diskPreview(selectedTower, isLit);
    }
  })

  $(".third").on("click", function(){
    var selectedTower = ".third";
    isLit = highlight(selectedTower, isLit);
    return
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
function highlight(selectedTower, isLit){
  var disk = getTopDisk(selectedTower, topDiskOne, topDiskTwo, topDiskThree);
  var location = selectedTower + " " + disk;

  if (isLit){
    $(location).removeClass("highlight");
    return false;
  }
  else{
    $(location).addClass("highlight");
    return true;
  }
}

function diskPreview(selectedTower, isLit){
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
  var highlightedDisk = getTopDisk(selectedTower);
  var nextLocationOne = optionOne + " " + highlightedDisk;
  var nextLocationTwo = optionTwo + " " + highlightedDisk;
  $(nextLocationOne).addClass("preview");
  $(nextLocationTwo).addClass("preview");
  $(optionOne).on("mouseenter", function(){
    if(isLit){
      $(nextLocationOne).toggle();
    }
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
function diskMove(selectedTower, selectedDisk){
}
function getTopDisk(selectedTower, topDiskOne, topDiskTwo, topDiskThree){
  if(selectedTower==".first"){
    console.log(topDiskOne)
    return topDiskOne;
  }
  else if(selectedTower==".second"){
    return topDiskTwo;
  }
  else if(selectedTower==".third"){
    return topDiskThree;
  }
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
