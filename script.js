$(document).ready(function(){
  // $("body").css("background", "red");
  var isLit = false;
  $(".one").on("click", function(evt){
    evt.preventDefault();
    console.log(this);
    isLit = highlight(".one", isLit);

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
