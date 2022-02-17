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
        this.curOperand = this.curOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if  (this.curOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.curOperand
        this.curOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.prevOperand)
        const cur = parseFloat(this.curOperand)
        if (isNaN(prev) || isNaN(cur)) return
        switch (this.operation) {
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '*':
                computation = prev * cur
                break
            case '÷':
                computation = prev / cur
                break
            default:
                return        
        }
        this.curOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split ('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
        
    }

    updateDisplay() {
        this.curOperandTextElement.innerText = this.getDisplayNumber(this.curOperand)
        if (this.operation != null) {
            this.prevOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
        } else {
            this.prevOperandTextElement.innerText = ''
        }
        
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})