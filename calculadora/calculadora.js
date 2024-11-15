var firstNum = 0;
var secondNum = 0;
var operator = "";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("keyboard").addEventListener("click", function(e) {
        if(e.target.tagName == "BUTTON") {
            const audio = new Audio();
            audio.src = "mouse.mp3";
            audio.play();
            if (e.target.innerHTML != "+" && e.target.innerHTML != "-" && e.target.innerHTML != "*" && e.target.innerHTML != "/" && e.target.innerHTML != "=" && e.target.innerHTML != "Reverse" && e.target.innerHTML != "C" && e.target.innerHTML != "Sqr" && e.target.innerHTML != "^") {
                if (operator == "") {
                    let numS = String(firstNum) + e.target.innerHTML;
                    firstNum = parseInt(numS);
                    document.getElementById("result").innerHTML = firstNum;
                }
                if (operator != "") {
                    let numS = String(secondNum) + e.target.innerHTML;
                    secondNum = parseInt(numS);
                    document.getElementById("result").innerHTML = secondNum;
                }
            } else if (e.target.innerHTML != "=" && e.target.innerHTML != "Reverse" && e.target.innerHTML != "Sqr" && e.target.innerHTML != "C") {
                if (operator == "") {
                    operator = e.target.innerHTML;
                }
                document.getElementById("result").innerHTML = operator; 
            } else if (e.target.innerHTML == "Sqr") {
                document.getElementById("story").innerHTML += Math.sqrt(firstNum) + "<br>";
                clear();
            } else if (e.target.innerHTML == "Reverse") {
                if (operator == "") {
                    if (firstNum < 0) {
                        firstNum = Math.abs(firstNum);
                    } else {
                        firstNum = -Math.abs(firstNum);
                    }
                    document.getElementById("result").innerHTML = firstNum;
                } else {
                    if (secondNum < 0) {
                        secondNum = Math.abs(secondNum);
                    } else {
                        secondNum = -Math.abs(secondNum);
                    }
                    document.getElementById("result").innerHTML = secondNum;
                }
                
            } else if (e.target.innerHTML == "=") {
                //document.getElementById("result").innerHTML = calculate(firstNum, operator, secondNum);
                if (operator == "/" && secondNum == 0) {
                    document.getElementById("result").innerHTML = "<p class='fs-2'>Math error: Dividir entre 0</p>"; 
                } else {
                    document.getElementById("story").innerHTML += calculate(firstNum, operator, secondNum) + "<br>";
                    clear();
                }
            } else {
                clear();
            }
        }
    });
});

function calculate(firstNums, operators, secondNums) {
    let res;
    switch(operators) {
        case "+":
            res = firstNums + secondNums;
            break;
        case "-":
            res = firstNums - secondNums;
            break;
        case "*":
            res = firstNums * secondNums;
            break;
        case "/":
            res = firstNums / secondNums;
            break;
        case "^":
            res = Math.pow(firstNums, secondNums);
            break;
        default:
            res = 0;
    }
    return res;
}
function clearStory() {
    document.getElementById("story").innerHTML = "";
}

function clear() {
    document.getElementById("result").innerHTML = 0;

    firstNum = 0;
    secondNum = 0;
    operator = "";
}