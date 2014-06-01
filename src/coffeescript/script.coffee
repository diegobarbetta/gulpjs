$(document).ready ->

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

  $("tr td a").on "click", (event) ->
    event.preventDefault()
    id = $(this).attr("href")
    file = $(this).attr("name")

    $(".overlay").fadeIn 200
    $(id).fadeIn 300
    $('#modal img').attr 'src', file

    $(".overlay").on "click", ->
      $(this).fadeOut 300
      $(id).fadeOut 300