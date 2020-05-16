$(function(){

    var first_name = "";
    var last_name = "";
    var i1 = 0;
    var i2 = 0;
    var entereddata = [];
    var date = [];
    var ind = 0;
    var info = [];

    // GET DATA AND CREATE TABLE
    $("#btnSubmit").click(function(){

        first_name = $("#fname").val();
        last_name = $("#lname").val();
        date.push($("#todaysdate").val());
        entereddata.push(parseFloat($("#enterdata").val()));
        
        // For table heading for name to publish just once
        if(ind == 0){

            $(".maintable").prepend(`<th colspan='2'>${first_name} ${last_name}</th>`);
            
            ind++;
        }

        // Appending to table
        $(".maintable").append(`<tr><td>${date[i1++]}</td><td>${entereddata[i2++]} lb</td></tr>`);

    }); // CLOSING GETTING AND CREATING TABLE


    // CREATING GRAPH
    $("#btnCreateGraph").click(function(){

        //Getting array of data and initializing array to be used in google graph function
        for (let i = 0; i < entereddata.length; i++) {
            info.push(
                    [i,entereddata[i]]
            ); 
        }

        // GREATING GRAPH
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawBasic);
        function drawBasic() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'lb/day');

            data.addRows(info);

            var options = {
                hAxis: {
                    title: 'Days'
                },
                vAxis: {
                    title: 'Weight'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('graph'));

            chart.draw(data, options);
        }
    }); // CLOSING CREATING GRAPH
    
}); // CLOSING