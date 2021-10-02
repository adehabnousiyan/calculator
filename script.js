var numbers = document.querySelectorAll(".numbers");
var val1;
var val2;
var opers = [];
var operators = document.querySelectorAll(".operators");
input = document.querySelector("#text");

function equal(opers, val1) {

    if (input.value != "") {
        val2 = parseFloat(input.value);
        input.value = ""
        
        switch (opers[opers.length - 1]) {
            case "power":
                input.value += Math.pow(val1, val2);
                val1 = 0;
                val2 = 0;

                break;

            case "mul":
                input.value += val1 * val2;
                val1 = 0;
                val2 = 0;

                break;

            case "div":
                input.value += val1 / val2;
                val1 = 0;
                val2 = 0;

                break;

            case "sub":
                input.value += val1 - val2;
                val1 = 0;
                val2 = 0;

                break;

            case "add":
                input.value += val1 + val2;
                val1 = 0;
                val2 = 0;

                break;
        }
    }
}


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        input.value += numbers[i].innerHTML;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        val1 = parseFloat(input.value);

        switch (operators[i].value) {
            case "clr":
                input.value = "";
                val1 = 0;
                val2 = 0;
                opers = [];

                break;

            case "dot":
                if (input.value.indexOf(".") == -1) {
                    input.value += "."
                }

                break;

            case "sin":
                if (input.value != "") {
                    input.value = Math.sin(val1);
                    val1 = 0;
                }

                break;

            case "cos":
                if (input.value != "") {
                    input.value = Math.cos(parseFloat(input.value));
                }

                break;

            case "change":
                if (input.value != "") {
                    input.value *= -1;
                }

                break;

            case "power":
                opers.push("power");
                val1 = parseFloat(input.value);
                input.value = "";

                break;

            case "mul":
                opers.push("mul");
                val1 = parseFloat(input.value);
                input.value = "";

                break;

            case "div":
                opers.push("div");
                val1 = parseFloat(input.value);
                input.value = "";

                break;

            case "sub":
                opers.push("sub");
                val1 = parseFloat(input.value);
                input.value = "";

                break;

            case "add":
                opers.push("add");
                val1 = parseFloat(input.value);
                input.value = "";

                break;

            case "backspace":
                input.value = input.value.slice(0, -1)
        }
    });
}