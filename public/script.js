class Calculator {
    constructor(prevOperandTextElement, curOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.curOperandTextElement = curOperandTextElement
        this.clear()
    }
    
    clear() {
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.curOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.curOperandTextElement.innerText = this.curOperand
    }
}

const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-op]')
const deleteButton = document.querySelector('[data-del]')
const equalButton = document.querySelector('[data-eq]')
const acButton = document.querySelector('[data-ac]')
const prevOperandTextElement = document.querySelector('[data-prev-op]')
const curOperandTextElement = document.querySelector('[data-cur-op]')

const calculator = new Calculator(prevOperandTextElement, curOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
