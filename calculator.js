const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function percentage(){
    if(display.value && !isNaN(display.value)){
       display.value = (parseFloat(display.value)/100).toString() ;
    }
}

function clearDisplay(){
    display.value = '';
}

function clearValue(){
    display.value = display.value.slice(0,-1);
}

function toggleSign(){
    if (!isNaN(display.value)){
        if(display.value.startsWith('-')){
            display.value = display.value.slice(1);
        }else{
            display.value = '-' + display.value;
        }
    }
}

/*
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}
*/

function calculate(){
    try{
        let expression = display.value;

        expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, p1) =>{
            return (parseFloat(p1)/100).toString();
        });
        display.value = eval(expression);
    }catch(error){
        display.value = "Error";
    }
}
