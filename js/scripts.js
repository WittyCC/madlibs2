$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var number1Input = $("input#number1").val();
    var number2Input = $("input#number2").val();
    var adjective1Input = $("input#adjective1").val();
    var noun1Input = $("input#noun1").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();
    var number3Input = $("input#number3").val();
    var holidayInput = $("input#holiday").val();

    $('.number1').text(number1Input);
    $('.number2').text(number2Input);
    $('.adjective1').text(adjective1Input);
    $('.noun1').text(noun1Input);
    $('.adjective2').text(adjective2Input);
    $('.adjective3').text(adjective3Input);
    $('.number3').text(number3Input);
    $('.holiday').text(holidayInput);

    $('#story').show();

    event.preventDefault();
  });
});
