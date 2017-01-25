$(document).ready(
    function(){
    $( "#button1" ).click(function() {
        let query = $('#input').val();
        window.location.href = "/results.html#query="+ query;
});
});



