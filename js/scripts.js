$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var candy = $("select#candy").val();
    var familyMember = $("select#familyMember").val();
    var color = $("select#color").val();
