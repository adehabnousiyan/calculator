var numbers = document.querySelectorAll(".numbers"),
    operators = document.querySelectorAll(".operators"),
    input = document.querySelector("#text"),
    val1,
    val2,
    op,
    operation;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        input.value += numbers[i].innerHTML;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        val1 = parseFloat(input.value);
        op = operators[i].value;
        switch (op) {
            case "power":
            case "mul":
            case "div":
            case "sub":
            case "add":
                operation = op;
                input.value = "";
                break;

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
                if (input.value) {
                    input.value = Math.sin(val1);
                }
                break;

            case "cos":
                if (input.value) {
                    input.value = Math.cos(val1);
                }
                break;

            case "change":
                if (input.value) {
                    input.value *= -1;
                }
                break;

            case "backspace":
                input.value = input.value.slice(0, -1)
        }
    });
}

function equal(operation, val1) {
    if (input.value) {
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
                input.value += val2 ?  val1 / val2 :  "Cannot divide by zero";
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