function Destination(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newDestination= new Destination(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul#destination").append("<li><span class='destination'>" + newDestination.location + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");

    $(".destination").click(function() {
    $("#show-destination").show();
    $("#show-destination h2").text(newDestination.location);
    $(".location").text(newDestination.location);
    $(".landmark").text(newDestination.landmark);
    $(".time").text(newDestination.time);
    $(".notes").text(newDestination.notes);
  });

});
});
