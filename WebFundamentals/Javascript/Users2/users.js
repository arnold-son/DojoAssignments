$("#submit").click(function(){
    $("table").append("<tr><td>" + $("#fname").val() + "</td><td>"+ $("#lname").val() + "</td><td>" + $("#email").val() + "</td><td>" + $("#contact").val() + "</td></tr>");
    return false;
});
