//option 1
var RESTAPIURL_1 = "https://wycycervw3.execute-api.us-east-1.amazonaws.com/default/getAverage/";

function ABC_average()
{
    document.getElementById("avg").checked = true;
    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;
    document.getElementById("num3").disabled = false;
    var myText = document.getElementById("num1").value = "";
    var myText2 = document.getElementById("num2").value = "";
    var myText3 = document.getElementById("num3").value = "";
}

//option 2
var RESTAPIURL_2 = "https://yjgadp81y9.execute-api.us-east-1.amazonaws.com/default/getMiddleValue/";

function middle_value()
{
    document.getElementById("middle").checked = true;
    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;
    document.getElementById("num3").disabled = false;
    var myText = document.getElementById("num1").value = "";
    var myText2 = document.getElementById("num2").value = "";
    var myText3 = document.getElementById("num3").value = "";
}

//option 3
var RESTAPIURL_3 = "https://6nwt86c0a6.execute-api.us-east-1.amazonaws.com/default/aToPowerOfB/";

function power(){
    document.getElementById("num3").disabled = true;
    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;
    
    document.getElementById("a-pow-b").checked = true;

    var myText = document.getElementById("num1").value = "";
    var myText2 = document.getElementById("num2").value = "";
    var myText3 = document.getElementById("num3").value = "";

    document.getElementById("output-description").innerHTML = "";
    document.getElementById("result").textContent = "";
}

//option 4
var RESTAPIURL_4 = "https://f4iyw1q9uc.execute-api.us-east-1.amazonaws.com/default/squareRootOfSquared/";

function square(){
    document.getElementById("num3").disabled = true;
    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;
    

    document.getElementById("sqr-root").checked = true;

    var myText = document.getElementById("num1").value = "";
    var myText2 = document.getElementById("num2").value = "";
    var myText3 = document.getElementById("num3").value = "";

    document.getElementById("output-description").innerHTML = "";
    document.getElementById("result").textContent = "";
}

//Calculation
function calculate(){
    if(document.getElementById("avg").checked){

        var val1 = document.getElementById("num1").value;
        var val2 = document.getElementById("num2").value;
        var val3 = document.getElementById("num3").value;
        var val1 = val1.trim();
        var val2 = val2.trim();
        var val3 = val3.trim();
        console.log(val1.length)
        
        if (val1.length == 0 || val2.length == 0 || val3.length == 0){
            alert("Please ensure that value of A, B and C are provided.")
        }
        else
        {
            if(isNaN(val1) || isNaN(val2) || isNaN(val3)){
                alert("the provided value is not a number. Please review the values.");
            }
            else{
                var finalUrl = RESTAPIURL_1 +"?num1="+val1+"&num2="+val2+"&num3="+val3;
                fetch(finalUrl)
                .then(response => response.json())
                .then(response => {
                    if(response.statusCode == 200){
                        document.getElementById("result").textContent = response.body;
                        document.getElementById("output-description").innerHTML = "The average of A, B and C";
                    }
                    else if(response.statusCode == 500){
                        document.getElementById("result").style.fontSize = "30px";
                        document.getElementById("result").textContent = response.body;
                    }
                })
            }
            
        }
    }
    else if(document.getElementById("middle").checked){

        var val1 = document.getElementById("num1").value;
        var val2 = document.getElementById("num2").value;
        var val3 = document.getElementById("num3").value;
        var val1 = val1.trim();
        var val2 = val2.trim();
        var val3 = val3.trim();

        if (val1.length == 0 || val2.length == 0 || val3.length == 0){
            alert("Please ensure that value of A, B and C are provided.");
        }
        else{
            if(isNaN(val1) || isNaN(val2) || isNaN(val3)){
                alert("the provided value is not a number. Please review the values.");
            }
            else{
                var finalUrl = RESTAPIURL_2 +"?num1="+val1+"&num2="+val2+"&num3="+val3;
                fetch(finalUrl)
                .then(response => response.json())
                .then(response => {
                    if(response.statusCode == 200){
                        document.getElementById("result").textContent = response.body;
                        document.getElementById("output-description").innerHTML = "The middle value of A, B and C";
                    }
                    else if(response.statusCode == 500){
                        document.getElementById("result").style.fontSize = "30px";
                        document.getElementById("result").textContent = response.body;
                    }
                })
            }
        }
    }
    else if(document.getElementById("a-pow-b").checked){

        var val1 = document.getElementById("num1").value;
        var val2 = document.getElementById("num2").value;
        var val1 = val1.trim();
        var val2 = val2.trim();

        if (val1.length == 0 || val2.length == 0){
            alert("Please ensure that value of A and B are provided.");
        }
        else{
            if(isNaN(val1) || isNaN(val2)){
                alert("the provided value is not a number. Please review the values.");
            }
            else{
                var finalUrl = RESTAPIURL_3 +"?valA="+val1+"&powB="+val2;
                fetch(finalUrl)
                .then(response => response.json())
                .then(response => {
                    if(response.statusCode == 200){
                        document.getElementById("result").textContent = response.body;
                        document.getElementById("output-description").innerHTML = "The value of A to the power of B";
                    }
                    else if(response.statusCode == 500){
                        document.getElementById("result").style.fontSize = "30px";
                        document.getElementById("result").textContent = response.body;
                    }
                })
            }
        }
    }else if(document.getElementById("sqr-root").checked){
        
        var val1 = document.getElementById("num1").value;
        var val2 = document.getElementById("num2").value;
        var val1 = val1.trim();
        var val2 = val2.trim();

        if (val1.length == 0 || val2.length == 0){
            alert("Please ensure that value of A and B are provided.");
        }
        else{
            if(isNaN(val1) || isNaN(val2)){
                alert("the provided value is not a number. Please review the values.");
            }
            else{
                var finalUrl = RESTAPIURL_4 +"?numA="+val1+"&numB="+val2;
                fetch(finalUrl)
                .then(response => response.json())
                .then(response => {
                    if(response.statusCode == 200){
                        document.getElementById("result").textContent = response.body;
                        document.getElementById("output-description").innerHTML = "The square root of A squared plus B squared";
                    }
                    else if(response.statusCode == 500){
                        document.getElementById("result").style.fontSize = "30px";
                        document.getElementById("result").textContent = response.body;
                    }
                })
            }
        }
    }
    else{
        alert("Please select a formula and insert the required values");
    }
}

//Reset button
function reset(){
    document.getElementById("output-description").innerHTML = "";
    document.getElementById("result").textContent = "";

    document.getElementById("avg").checked = false;
    document.getElementById("middle").checked = false;
    document.getElementById("a-pow-b").checked = false;
    document.getElementById("sqr-root").checked = false;

    document.getElementById("num1").disabled = true;
    document.getElementById("num2").disabled = true;
    document.getElementById("num3").disabled = true;

    var myText = document.getElementById("num1").value = "";
    var myText2 = document.getElementById("num2").value = "";
    var myText3 = document.getElementById("num3").value = "";
}