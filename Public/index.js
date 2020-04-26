function cloud(){
  $(".cloud").addClass("move");
  setTimeout(function() {
    $(".cloud").removeClass("move");
  }, 1600);
  setTimeout(function() {
    cloud();
  },3200);
  }

cloud();
