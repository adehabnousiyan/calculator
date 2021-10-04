var numbers = document.querySelectorAll(".numbers"),
operators = document.querySelectorAll(".operators"),
input = document.querySelector("#text"),
val1,
val2,
operation;

function equal(operation, val1) {
    if (input.value != "") {
        val2 = parseFloat(input.value);
        input.value = ""

        switch (operation) {
            case "power":
                input.value += Math.pow(val1, val2);
                break;

            case "mul":
                input.value += val1 * val2;
                break;

            case "div":
                (val2 != 0) ? input.value += val1 / val2 : input.value += "Cannot divide by zero";
                break;

            case "sub":
                input.value += val1 - val2;
                break;

            case "add":
                input.value += val1 + val2;
                break;
        }
        val1 = 0;
        val2 = 0;
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
                operation = "";

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
                operation = "power";
                val1 = parseFloat(input.value);
                input.value = "";
                break;

            case "mul":
                operation = "mul";
                val1 = parseFloat(input.value);
                input.value = "";
                break;

            case "div":
                operation = "div";
                val1 = parseFloat(input.value);
                input.value = "";
                break;

            case "sub":
                operation = "sub";
                val1 = parseFloat(input.value);
                input.value = "";
                break;

            case "add":
                operation = "add";
                val1 = parseFloat(input.value);
                input.value = "";
                break;

            case "backspace":
                input.value = input.value.slice(0, -1)
        }
    });
}