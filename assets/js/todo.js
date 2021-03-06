//Global variable
var deleteButton = "<span><i class='fas fa-trash-alt'></i></span>";

// Change the style of calendar records when clicked.
$("ul").on("click", "li", function(){
  $(this).toggleClass("checked");
});

// Delete the record if the delete button is triggered.
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
  // Get rid of events bubble.
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    // Get the to-do content
    let input = $(this).val();
    // Empty the input box
    $(this).val("");
    $("ul").append("<li>" + deleteButton + input + "</li>");
  }
});

$("span:first").click("on", function(){
  $("input[type='text']").fadeToggle();
});