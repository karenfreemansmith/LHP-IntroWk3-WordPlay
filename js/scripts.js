//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#listenToMe").click(function() {
  var iHearYou = [];
  iHearYou=$("#yourWords").val().split(" ");
  var whatIHeard = [];
  iHearYou.forEach(function(word) {
    if(word.length > 3) {
      whatIHeard.push(word.toUpperCase());
    }
  });
//loop through to build a new array out of all words over 3 letters long
  whatIHeard.reverse();
  $("#myWords").text(whatIHeard.join(" "));
  $("#response").toggle();
  $("#listening").toggle();
});

$("#tryAgain").click(function() {
  $("#yourWords").val("");
  $("#response").toggle();
  $("#listening").toggle();
});
