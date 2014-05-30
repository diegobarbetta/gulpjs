$ ->

  $("<select />").appendTo "#nav"

  $("<option />",
    selected: "selected"
    value: ""
    text: "Navegue"
  ).appendTo "#nav select"

  $("#nav a").each ->
    el = $(this)
    $("<option />",
      value: el.attr("href")
      text: el.text()
    ).appendTo "#nav select"