if(screen.width>1366){
  $(".sm").remove();
  $(".md").remove();

}else if(screen.width<1367 && screen.width>700){
  $(".bg").remove();
  $(".sm").remove();
} else {
  $(".bg").remove();
  $(".md").remove();

}
function icon(){
  $(".icon2").addClass("move");
  setTimeout(function() {
    $(".icon2").removeClass("move");
  }, 800);
  setTimeout(function() {
    icon();
  },1600);
  }

icon();

var text = $(".place").text().length;

if(text>16){
  $(".place").addClass("smaller-font");
}
