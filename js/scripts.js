//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#listenToMe").click(function() {
  $("#myWords").text($("#yourWords").val());
});
