export { Calculator };

class Calculator {
    constructor(container) {
        this.container = container;
        this.clearButton = container.querySelector("#clear-btn");
        this.buttonEqual = container.querySelector(
            ".container-buttons-calculator__btn--equal"
        );
        this.dispĺay = container.querySelector(
            ".container-display-calculator__paragraph"
        );
        this.symbols = [
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

        this.symbols.forEach((symbol) => {
            symbol.addEventListener("click", () => this.mostrarSimbolo(symbol));
        });

        this.clearButton.addEventListener("click", () => this.limpiarPantalla());

        this.buttonEqual.addEventListener("click", () => this.ejecutarOperacion());
    }

    mostrarNumero(num) {
        if (
            this.dispĺay.textContent !== "0" &&
            this.dispĺay.textContent !== "Syntax error"
        ) {
            this.dispĺay.textContent += num.textContent;
        } else if (
            num.textContent !== "00" &&
            this.dispĺay.textContent !== "Syntax error"
        ) {
            this.dispĺay.textContent = num.textContent;
        }
    }

    mostrarSimbolo(simbolo) {
        if (this.dispĺay.textContent !== "Syntax error") {
            this.dispĺay.textContent += simbolo.textContent;
        }
    }

    limpiarPantalla() {
        this.dispĺay.textContent = "0";
    }

    ejecutarOperacion() {
        try {
            if (this.dispĺay.textContent !== "0") {
                let resultado = eval(this.dispĺay.textContent);
                this.dispĺay.textContent = resultado;
            }
        } catch {
            this.dispĺay.textContent = "Syntax error";
        }
    }
}
