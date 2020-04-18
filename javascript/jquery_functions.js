$(function(){

    var first_name = "";
    var last_name = "";
    var i1 = 0;
    var i2 = 0;
    var data = [];
    var date = [];
    var ind = 0;

    $("#btnSubmit").click(function(){

        first_name = $("#fname").val();
        last_name = $("#lname").val();
        date.push($("#todaysdate").val());
        data.push($("#enterdata").val());
        
        if(ind == 0){

            $(".maintable").prepend(`<th colspan='2'>${first_name} ${last_name}</th>`);
            
            ind++;
        }

        $(".maintable").append(`<tr><td>${date[i1++]}</td><td>${data[i2++]} lb</td></tr>`);
    });

    
    
});