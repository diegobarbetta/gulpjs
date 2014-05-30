$(function() {
  $("<select />").appendTo("#nav");
  $("<option />", {
    selected: "selected",
    value: "",
    text: "Navegue"
  }).appendTo("#nav select");
  return $("#nav a").each(function() {
    var el;
    el = $(this);
    return $("<option />", {
      value: el.attr("href"),
      text: el.text()
    }).appendTo("#nav select");
  });
});
