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
  $("#studentInfo").submit(function(event) {
    event.preventDefault();
    var studentNameInput = $("input#studentName").val();
    alert(studentNameInput);
    $("#studentInfo").fadeOut();
    $("#questionNo").delay(400).fadeIn();

  });

  $("#questionNo").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=questionNo]:checked").val();

    tally(answer1);
    $("#questionNo").fadeOut();
    $(".trackName").delay(400).fadeIn();

  });

  $("#reset").submit(function(event) {
    //this might not work, check the tally if they reset.
  });

}); //end of doc.ready
