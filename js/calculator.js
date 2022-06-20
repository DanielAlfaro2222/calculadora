export { Calculator };

class Calculator {
    constructor(container) {
        this.container = container;
        this.clearButton = container.querySelector("#clear-btn");
        this.buttonEqual = container.querySelector(
            ".container-buttons-calculator__btn--equal"
        );
        this.buttonDeleteDigit = container.querySelector(
            ".container-buttons-calculator__btn--delete-digit"
        );
        this.buttonPoint = container.querySelector(
            ".container-buttons-calculator__btn--point"
        );
        this.operator = "";
        this.previousResult = container.querySelector("#prev-value");
        this.currentResult = container.querySelector("#current-value");
        this.operators = [
            ...container.querySelectorAll(
                ".container-buttons-calculator__btn--operator"
            ),
        ];
        this.numbers = [
            ...container.querySelectorAll(
                ".container-buttons-calculator__btn--number"
            ),
        ];

        this.numbers.forEach((num) => {
            num.addEventListener("click", () =>
                this.mostrarNumero(num.textContent.trim())
            );
        });

        this.operators.forEach((operator) => {
            operator.addEventListener("click", () =>
                this.mostrarOperacion(operator.textContent.trim())
            );
        });

        this.clearButton.addEventListener("click", () => this.limpiarPantalla());

        this.buttonDeleteDigit.addEventListener("click", () =>
            this.eliminarDigito()
        );

        this.buttonEqual.addEventListener("click", () =>
            this.calcular(
                this.operator,
                this.previousResult.textContent,
                this.currentResult.textContent
            )
        );

        this.buttonPoint.addEventListener("click", () => this.agregarPunto());
    }

    mostrarNumero(num) {
        if (
            this.currentResult.textContent !== "0" &&
            this.currentResult.textContent !== "Syntax error"
        ) {
            this.currentResult.textContent += num;
        } else {
            this.currentResult.textContent = num;
        }
    }

    mostrarOperacion(operador) {
        if (
            this.currentResult.textContent !== "0" &&
            this.currentResult.textContent !== "Syntax error" &&
            this.currentResult.textContent !== "" &&
            this.operator === ""
        ) {
            this.operator = operador;
            this.previousResult.textContent = `${this.currentResult.textContent} ${this.operator}`;
            this.currentResult.textContent = "";
        }
    }

    limpiarPantalla() {
        this.currentResult.textContent = "0";
        this.previousResult.textContent = "";
    }

    calcular(operador, numeroAnterior, numeroActual) {
        numeroAnterior = Number(numeroAnterior.split(" ")[0]);
        numeroActual = Number(numeroActual);
        let operacion;

        if (operador === "+") {
            operacion = numeroAnterior + numeroActual;
            this.currentResult.textContent = isNaN(operacion)
                ? "Syntax error"
                : `${operacion}`;
        } else if (operador === "*") {
            operacion = numeroAnterior * numeroActual;
            this.currentResult.textContent = isNaN(operacion)
                ? "Syntax error"
                : `${operacion}`;
        } else if (operador === "-") {
            operacion = numeroAnterior - numeroActual;
            this.currentResult.textContent = isNaN(operacion)
                ? "Syntax error"
                : `${operacion}`;
        } else {
            operacion = numeroAnterior - numeroActual;
            this.currentResult.textContent = isNaN(operacion)
                ? "Syntax error"
                : `${operacion}`;
        }

        this.previousResult.textContent = "";
        this.operator = "";
    }

    eliminarDigito() {
        let valorActual = this.currentResult.textContent;

        if (valorActual.length === 1) {
            this.currentResult.textContent = "0";
        } else if (valorActual !== "Syntax error") {
            this.currentResult.textContent = valorActual.slice(
                0,
                valorActual.length - 1
            );
        }
    }

    agregarPunto() {
        if (this.currentResult.textContent.at(-1) !== ".") {
            this.currentResult.textContent += ".";
        }
    }
}
