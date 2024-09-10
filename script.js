const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function backspace(){
    let inputFeild = document.getElementById("display");
    if(inputFeild.value == "Error"){
        inputFeild.value = "";
    }
    inputFeild.value = inputFeild.value.slice(0,-1);
}