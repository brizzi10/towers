$(document).ready(function(){
  var isLit = false;
  var startingDisks=4;
  var towerOne={location:".first", topDisk:".one", totalDisks:startingDisks, highlighted:false};
  var towerTwo={location:".second", topDisk:"", totalDisks: 0, highlighted:false};
  var towerThree={location:".third", topdisk:"", totalDisks: 0, highlighted: false};

  $(".first").on("click", function(){
    var selectedTower = towerOne;
    isLit = highlight(selectedTower);
    if(isLit){
      diskPreview(selectedTower);
    }
  })

  $(".second").on("click", function(){
    var selectedTower = towerTwo;
    isLit = highlight(selectedTower);
    if(isLit){
      diskPreview(selectedTower);
    }
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
  isLit= selectedTower.highlighted;
  console.log(islit);
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
