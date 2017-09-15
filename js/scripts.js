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
  var windowsAversion;
  $("#studentInfo").submit(function(event) {
    event.preventDefault();
    var studentNameInput = $("input#studentName").val();
    $("#studentInfo").fadeOut();
    $("#questionFrontOrBack").delay(400).fadeIn();

  });

  $("#questionFrontOrBack").submit(function(event) {
    event.preventDefault();
    var answerFrontOrBack = $("input:radio[name=questionFrontOrBack]:checked").val();
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
    $("#questionRuby").fadeOut();
    if (answerRuby === "yesRuby") {
      $(".trackName").delay(400).fadeIn();
    } else {
      $("#questionMicrosoft").delay(400).fadeIn();
    }
  });

//this will be the final question
  $("#questionMicrosoft").submit(function(event) {
    event.preventDefault();
    var answerMicrosoft = $("input:radio[name=questionMicrosoft]:checked").val();
    $("#questionMicrosoft").fadeOut();
    if (answerMicrosoft === "loveMicrosoft") {
      $(".trackName").delay(400).fadeIn();
    } else if (answerMicrosoft === "hateMicrosoft") {
      windowsAversion = true;
      $("#questionPurpose").delay(400).fadeIn();
    }

  });

  $("#questionPurpose").submit(function(event) {
    event.preventDefault();
    var answerPurpose = $("input:radio[name=questionPurpose]:checked").val();

    console.log(answerPurpose);
    $("#questionPurpose").fadeOut();
    tally(answerPurpose);
    $("#questionJob").delay(400).fadeIn();
  });

  $("#questionJob").submit(function(event) {
    event.preventDefault();
    var answerJob = $("input:radio[name=questionJob]:checked").val();

    console.log(answerJob);
    $("#questionJob").fadeOut();
    tally(answerJob);
    $("#questionAppeal").delay(400).fadeIn();
  });

  $("#questionAppeal").submit(function(event) {
    event.preventDefault();
    var answerAppeal = $("input:radio[name=questionAppeal]:checked").val();

    console.log(answerAppeal);
    $("#questionAppeal").fadeOut();
    tally(answerAppeal);
    $(".result").delay(400).fadeIn();
  });

  // this is the example question, scrap this later.
  // $("#questionNo").submit(function(event) {
  //   event.preventDefault();
  //   var answer1 = $("input:radio[name=questionNo]:checked").val();
  //
  //   tally(answer1);
  //   $("#questionNo").fadeOut();
  //   $(".trackName").delay(400).fadeIn();
  //
  // });

  $("#reset").submit(function(event) {
    //this might not work, check the tally if they reset.
  });

}); //end of doc.ready
