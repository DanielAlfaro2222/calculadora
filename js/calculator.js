export { Calculator };

class Calculator {
    constructor(container) {
        this.container = container;
        this.clearButton = container.querySelector("#clear-btn");
        this.buttonEqual = container.querySelector(
            ".container-buttons-calculator__btn--equal"
        );
        this.operator = "";
        this.previousResult = container.querySelector("#prev-value");
        this.currentResult = container.querySelector("#current-value");
        this.operators = [
            ...container.querySelectorAll(
                ".container-buttons-calculator__btn--symbol"
            ),
        ];
        this.numbers = [
            ...container.querySelectorAll(
                ".container-buttons-calculator__btn--number"
            ),
        ];

        this.numbers.forEach((num) => {
            num.addEventListener("click", () => this.mostrarNumero(num));
        });

        this.operators.forEach((operator) => {
            operator.addEventListener("click", () => this.mostrarOperacion(operator));
        });

        this.clearButton.addEventListener("click", () => this.limpiarPantalla());

        this.buttonEqual.addEventListener("click", () =>
            this.calcular(
                this.operator,
                this.previousResult.textContent,
                this.currentResult.textContent
            )
        );
    }

    mostrarNumero(num) {
        if (this.currentResult.textContent !== "0") {
            this.currentResult.textContent += num.textContent;
        } else {
            this.currentResult.textContent = num.textContent;
        }
    }

    mostrarOperacion(operador) {
        if (this.currentResult !== "0") {
            this.operator = operador.textContent;
            this.previousResult.textContent = `${this.currentResult.textContent} ${this.operator}`;
            this.currentResult.textContent = "";
        }
    }

    limpiarPantalla() {
        this.currentResult.textContent = "0";
        this.previousResult.textContent = "";
    }

    calcular(operador, numeroAnterior, numeroActual) {
        if (operador === "+") {
            this.currentResult.textContent = `${Number(numeroAnterior.split(" ")[0]) + Number(numeroActual)
                }`;
            this.previousResult.textContent = "";
            this.operator = "";
        } else if (operador === "*") {
            this.currentResult.textContent = `${Number(numeroAnterior.split(" ")[0]) * Number(numeroActual)
                }`;
            this.previousResult.textContent = "";
            this.operator = "";
        } else if (operador === "-") {
            this.currentResult.textContent = `${Number(numeroAnterior.split(" ")[0]) - Number(numeroActual)
                }`;
            this.previousResult.textContent = "";
            this.operator = "";
        } else {
            this.currentResult.textContent = `${Number(numeroAnterior.split(" ")[0]) / Number(numeroActual)
                }`;
            this.previousResult.textContent = "";
            this.operator = "";
        }
    }
}
