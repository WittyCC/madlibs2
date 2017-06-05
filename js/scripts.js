$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var blanks = ["number1" ,"number2" , "adjective1" ,"noun1" , "adjective2" , "adjective2" , "adjective3" , "number3" , "holiday"]
      blanks.forEach(function(blank) {
        var userInput = $("input#"+ blank).val();
        $("." + blank).text(userInput);
      });

      $('#story').show();

      event.preventDefault();
  });
});
