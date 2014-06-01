$(document).ready(function() {
  $("<select />").appendTo("#nav");
  $("<option />", {
    selected: "selected",
    value: "",
    text: "Navegue"
  }).appendTo("#nav select");
  $("#nav a").each(function() {
    var el;
    el = $(this);
    return $("<option />", {
      value: el.attr("href"),
      text: el.text()
    }).appendTo("#nav select");
  });
  return $("tr td a").on("click", function(event) {
    var file, id;
    event.preventDefault();
    id = $(this).attr("href");
    file = $(this).attr("name");
    $(".overlay").fadeIn(200);
    $(id).fadeIn(300);
    $('#modal img').attr('src', file);
    return $(".overlay").on("click", function() {
      $(this).fadeOut(300);
      return $(id).fadeOut(300);
    });
  });
});
