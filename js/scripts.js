$(document).ready(function() {

function Task(task) {
  this.task = task;
}

  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task").val();
    var newTask = new Task(inputtedTask);

    $("input#new-task").val("");

    $("ul#tasks").append('<p>'+'<div class="checkbox">' + '<input type="checkbox" value="" name="tasksToDo">' + newTask.task + '</div>'+'<p>');

    $("#btn2").show();
  });

  // $("#btn2").click(function(){
  //   var checked = [];
  //         $("ul#tasks").each(function(){
  //           if ($(this).is(':checked')) {
  //               checked.push($(this));
  //             }
  //              console.log(checked);
  //          });
  //        });

  $("#btn2").on("click",function(){
      $("input:checkbox").each(function() {
          if ($(this).is(":checked")) {
              $(this).parent().remove();
          }
      });
  });


});
