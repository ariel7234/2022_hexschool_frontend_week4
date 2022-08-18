$(document).ready(function () {
  $(".showMenu").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("menu-show");
  });
});
