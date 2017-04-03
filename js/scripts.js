$(document).ready(function() {

function Task(task) {
  this.task = task;
}

  $("form#form").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task").val();
    var newTask = new Task(inputtedTask);

    $("input#new-task").val("");

    $("ul#tasks").append('<li>'+'<div class="checkbox">' + '<input type="checkbox" value=" ">' + newTask.task + '</div>'+'</li>');

    $("#btn2").show();
  });

  $("#btn2").click(function(){
    var checked = [];
           $.each($("input[name='tasksToDo']:checked"), function(){
               checked.push($(this).val());
               console.log($(this).val());
           });
  });


});
