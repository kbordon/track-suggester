// back
//when you have researched, go back and replace the placeholder languages with their proper names.

var javaTally = 0;
var cSharpTally = 0;
var phpTally = 0;

var tally = function(answerValue) {
  if (answerValue === "lang1") {
    javaTally += 1;
  } else if (answerValue == "lang2") {
    cSharpTally += 1;
  } else if (answerValue == "lang3") {
    phpTally += 1;
  }
}

// front

$(document).ready(function(){
  $("#studentInfo").submit(function(event) {
    event.preventDefault();
    var windowsAversion;
    var studentNameInput = $("input#studentName").val();
    alert(studentNameInput);
    $("#studentInfo").fadeOut();
    $("#questionFrontOrBack").delay(400).fadeIn();

  });

  $("#questionFrontOrBack").submit(function(event) {
    event.preventDefault();
    var answerFrontOrBack = $("input:radio[name=questionFrontOrBack]:checked").val();
    console.log(answerFrontOrBack);
    $("#questionFrontOrBack").fadeOut();
    if (answerFrontOrBack === "front") {
      $(".trackName").delay(400).fadeIn();
    } else {
      $("#questionRuby").delay(400).fadeIn();
    }
  });

  $("#questionRuby").submit(function(event) {
    event.preventDefault();
    var answerRuby = $("input:radio[name=questionRuby]:checked").val();
    console.log(answerRuby);
    $("#questionRuby").fadeOut();
    if (answerRuby === "yesRuby") {
      $(".trackName").delay(400).fadeIn();
    } else {
      $("#questionMicrosoft").delay(400).fadeIn();
    }
  });

  $("#questionMicrosoft").submit(function(event) {
    event.preventDefault();
    var answerMicrosoft = $("input:radio[name=questionMicrosoft]:checked").val();
    console.log(answerMicrosoft);
    $("#questionMicrosoft").fadeOut();
    if (answerMicrosoft === "loveMicrosoft") {
      $(".trackName").delay(400).fadeIn();
    } else if (answerMicrosoft === "hateMicrosoft") {
      windowsAversion = true;
      console.log(windowsAversion);
      $("#questionNo").delay(400).fadeIn();
    } else {
      $("#questionNo").delay(400).fadeIn();
    }
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
