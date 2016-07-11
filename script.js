$(document).ready(function(){
  // $("body").css("background", "red");
  var isLit = false;
  $(".one").on("click", function(evt){
    var selectedColumn = ".first";
    var selectedDisk = "one";
    evt.preventDefault();
    isLit = highlight(".one", isLit);
    discPreview(selectedColumn, selectedDisk);
  })


})
function highlight(discNumber, isLit){
  if (isLit){
    $(discNumber).css("border-color", "rgb(35, 15, 93)");
    return false;
  }
  else{
    $(discNumber).css("border-color", "red");
    return true;
  }
}

function discPreview(selectedColumn, selectedDisk){
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
    var newDisc =  $("<div class='disc one preview'></div>");
    $(".tower-2").append(newDisc);
    $(optionOne).on("mouseleave", function(){
      $(".disc.one.preview").remove();
    })
  })

  $(optionTwo).on("mouseenter", function(){
    var newDisc = $("<div class='disc one preview'></div>");
    $(".tower-3").append(newDisc);
    $(optionTwo).on("mouseleave", function(){
      $(".disc.one.preview").remove();
    })
  })
}
