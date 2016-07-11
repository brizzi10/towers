$(document).ready(function(){
  var isLit = false;
  $(".one").on("click", function(evt){
    var selectedColumn = ".first";
    var selectedDisk = "one";
    evt.preventDefault();
    isLit = highlight(selectedDisk, isLit);
    discPreview(selectedColumn, selectedDisk);
  })


})
function highlight(discNumber, isLit){
  discNumber = "." + discNumber;
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
    var newDisc =  $("<div class='disc " + selectedDisk + " preview'></div>");
    $(optionOne).append(newDisc);
    $(optionOne).on("mouseleave", function(){
      $(".disc.one.preview").remove();
    })
  })
  $(optionTwo).on("mouseenter", function(){
    var newDisc =  $("<div class='disc " + selectedDisk + " preview'></div>");
    $(optionTwo).append(newDisc);
    $(optionTwo).on("mouseleave", function(){
      $(".disc.one.preview").remove();
    })
  })
}
