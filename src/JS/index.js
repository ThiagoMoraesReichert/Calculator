var calculation = '';

function addNumber(n){
    calculation+=n;
    document.getElementById("calculationResult").innerHTML = calculation
}

function addOpenParenthesis(){
    calculation += '(';
    document.getElementById("calculationResult").innerHTML = calculation;
}

function addCloseParenthesis(){
    calculation += ')';
    document.getElementById("calculationResult").innerHTML = calculation;
}


function calculate(){
    try {
        var result = eval(calculation);
        document.getElementById("calculationResult").innerHTML = result;
        calculation = '' + result;  
    } catch(e) {
        document.getElementById("calculationResult").innerHTML = 'Error!';
        calculation = '';
    }

}

function clearCalculation(){
    calculation = '';
    document.getElementById("calculationResult").innerHTML = calculation;
}

function sum(){
    calculation += '+';
    document.getElementById("calculationResult").innerHTML = calculation;
}

function subtraction(){
    calculation += '-';
    document.getElementById("calculationResult").innerHTML = calculation
}

function multiply(){
    calculation += '*';
    document.getElementById("calculationResult").innerHTML = calculation
}

function dividedBy(){
    calculation += '/';
    document.getElementById("calculationResult").innerHTML = calculation
}

function percentage(){
    
    calculation += '/100*';
    document.getElementById("calculationResult").innerHTML = calculation

}