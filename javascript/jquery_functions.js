$(function(){

    var first_name = "";
    var last_name = "";
    var data;
    var date;
    var ind = 0;

    $("#btnSubmit").click(function(){
        
        first_name = $("#fname").val();
        last_name = $("#lname").val();
        date = $("#todaysdate").val();
        data = $("#enterdata").val();
        
        if(ind == 0){

            $(".maintable").prepend("<th colspan='2'>" + first_name + " " + last_name +  "</th>");
            
            ind++;
        }

        $(".maintable").append("<tr><td>" + date + "</td><td>" + data + " lb</td></tr>");

    });

    
    
});