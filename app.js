$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".photo").show("1000");
    } else {
      $(".photo")
        .not("." + value)
        .hide("1000");
      $(".photo")
        .filter("." + value)
        .show("1000");
    }
  });
});
