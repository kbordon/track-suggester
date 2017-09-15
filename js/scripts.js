// back
var javaTally = 0;
var cSharpTally = 0;
var phpTally = 0;

var tally = function(answerValue) {
  if (answerValue === "java") {
    javaTally += 1;
  } else if (answerValue == "cSharp") {
    cSharpTally += 1;
  } else if (answerValue == "php") {
    phpTally += 1;
  }
}

// front
$(document).ready(function(){
  var aversionWindows = 0;
  var studentNameInput;
  var result;

  $("#studentInfo").submit(function(event) {
    event.preventDefault();
    studentNameInput = $("input#studentName").val();

    $("#studentInfo").fadeOut();
    $("#questionFrontOrBack").delay(400).fadeIn();

  });

  $("#questionFrontOrBack").submit(function(event) {
    event.preventDefault();
    $(".studentName").prepend(studentNameInput);
    var answerFrontOrBack = $("input:radio[name=questionFrontOrBack]:checked").val();

    $("#questionFrontOrBack").fadeOut();
    if (answerFrontOrBack === "front") {
      $(".result").text("CSS");
      $(".resultsTrack").delay(500).fadeIn();
    } else {
      $("#questionRuby").delay(400).fadeIn();
    }
  });

  $("#questionRuby").submit(function(event) {
    event.preventDefault();
    var answerRuby = $("input:radio[name=questionRuby]:checked").val();

    $("#questionRuby").fadeOut();
    if (answerRuby === "yesRuby") {
      $(".result").text("Ruby");
      $(".resultsTrack").delay(500).fadeIn();
    } else {
      $("#questionWindows").delay(400).fadeIn();
    }
  });

  $("#questionWindows").submit(function(event) {
    event.preventDefault();
    var answerWindows = $("input:radio[name=questionWindows]:checked").val();

    $("#questionWindows").fadeOut();
    if (answerWindows === "loveWindows") {
      $(".resultsTrack").delay(500).fadeIn();
      $(".result").text("C#");
    } else if (answerWindows === "hateWindows") {
      aversionWindows = true;
      $("#questionPurpose").delay(400).fadeIn();
    } else {
      $("#questionPurpose").delay(400).fadeIn();
    }

  });

  $("#questionPurpose").submit(function(event) {
    event.preventDefault();
    var answerPurpose = $("input:radio[name=questionPurpose]:checked").val();

    $("#questionPurpose").fadeOut();
    tally(answerPurpose);
    $("#questionJob").delay(400).fadeIn();
  });

  $("#questionJob").submit(function(event) {
    event.preventDefault();
    var answerJob = $("input:radio[name=questionJob]:checked").val();

    $("#questionJob").fadeOut();
    tally(answerJob);
    $("#questionAppeal").delay(400).fadeIn();
  });

  $("#questionAppeal").submit(function(event) {
    event.preventDefault();
    var answerAppeal = $("input:radio[name=questionAppeal]:checked").val();

    $("#questionAppeal").fadeOut();
    tally(answerAppeal);

    if (aversionWindows) {
      cSharpTally = 0;
    }

    if (javaTally > cSharpTally && javaTally > phpTally) {
      $(".result").text("Java");
      $(".resultsTrack").delay(500).fadeIn();
    } else if (cSharpTally > javaTally && cSharpTally > phpTally) {
      $(".result").text("C#");
      $(".resultsTrack").delay(500).fadeIn();
    } else if (phpTally > javaTally && phpTally > cSharpTally) {
      $(".result").text("PHP");
      $(".resultsTrack").delay(500).fadeIn();
    } else {
      $(".resultsNone").delay(500).fadeIn();
    }
  });


  $("#reset").submit(function(event) {
    //this might not work, check the tally if they reset.
  });

}); //end of doc.ready
