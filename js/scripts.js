// back
//when you have researched, go back and replace the placeholder languages with their proper names.

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
      $(".trackName").delay(500).fadeIn();
    } else {
      $("#questionRuby").delay(400).fadeIn();
    }
  });

  $("#questionRuby").submit(function(event) {
    event.preventDefault();
    var answerRuby = $("input:radio[name=questionRuby]:checked").val();
    $("#questionRuby").fadeOut();
    if (answerRuby === "yesRuby") {
      $(".trackName").delay(500).fadeIn();
    } else {
      $("#questionWindows").delay(400).fadeIn();
    }
  });

//this will be the final question
  $("#questionWindows").submit(function(event) {
    event.preventDefault();
    var answerWindows = $("input:radio[name=questionWindows]:checked").val();

    $("#questionWindows").fadeOut();
    if (answerWindows === "loveWindows") {
      $(".trackName").delay(400).fadeIn();
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
    console.log(javaTally);
    console.log(cSharpTally);
    console.log(phpTally);
    console.log(aversionWindows);

    if (aversionWindows) {
      cSharpTally = 0;
    }

    if (javaTally > cSharpTally && javaTally > phpTally) {
      $(".trackName").delay(500).fadeIn();
    } else if (cSharpTally > javaTally && cSharpTally > phpTally) {
      $(".trackName").delay(500).fadeIn();
    } else if (phpTally > javaTally && phpTally > cSharpTally) {
      $(".trackName").delay(500).fadeIn();
    } else {
      $(".trackName").delay(500).fadeIn();
    }
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
