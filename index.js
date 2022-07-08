const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear();

		const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

		numberButtons(button => {
			button.addEventListener('click', () => {
				calculator.appendNumber(button.innerText)
				calculator.updateDisplay()
			})
		})
	}


	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1)
	}

	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return
		this.currentOperand = this.currentOperand.toString() + number.toString()
	}

	chooseOperation(operation) {
		operationButtons.forEach(button => {
			button.addEventListener('click', () => {
				calculator.chooseOperation(button.innerText)
				calculator.updateDisplay()
			})
		})
	}

	compute() {
		equalsButton.addEventListener('click', button => {
			calculator.compute()
			calculator.updateDisplay()
		})
	}

	updateDisplay() {
		if (this.operation != null) {
			this.previousOperandTextElement.innerText =
				`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
		}

	}
}