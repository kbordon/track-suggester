// back
//when you have researched, go back and replace the placeholder languages with their proper names.

var language1Tally = 0;
var language2Tally = 0;
var language3Tally = 0;
var language4Tally = 0;

var tally = function(answerValue) {
  if (answerValue === "lang1") {
    language1Tally += 1;
  } else if (answerValue == "lang2") {
    language2Tally += 1;
  } else if (answerValue == "lang3") {
    language3Tally += 1;
  }
}

// front

$(document).ready(function(){
  $("#questionNo").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=questionNo]:checked").val();

    tally(answer1);
    $("#questionNo").fadeOut();
    $(".trackName").fadein();

  });

}); //end of doc.ready
