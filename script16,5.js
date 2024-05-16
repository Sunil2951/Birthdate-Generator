var parent_div = document.createElement("div");
parent_div.className = "main";

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML = "Display Date";
button.addEventListener("click",display);

parent_div.append(input_date,button);
document.body.append(parent_div);

function display (){
    var input = document.getElementById("dob").value;
    var inputdate = new Date(input);
    var currentdate = new Date();
    
    var millisecdiff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
    console.log(millisecdiff);
    var secdiff = Math.floor(millisecdiff/1000);

    var mindiff = Math.floor(secdiff/60);

    var hourdiff = Math.floor(mindiff/60);

    var daydiff = Math.floor(hourdiff/24);

    var yeardiff = currentdate.getFullYear()-inputdate.getFullYear()

    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());

    var div = document.createElement("div");
    div.className = "main1"
    div.innerHTML=`Given input Date is ${currentdate}<br>
    Year ${yeardiff}<br>
    Month ${monthdiff}<br>
    Day ${daydiff}<br>
    Hour ${hourdiff}<br>
    Minutes ${mindiff}<br>
    Seconds ${secdiff}<br>
    MilliSeconds ${millisecdiff}`;

    document.body.append(div);
}