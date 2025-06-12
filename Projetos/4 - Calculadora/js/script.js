const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }

    //mostra os dígitos no visor
    addDigit(digit){
        //verifica se a operação atual já possui um ponto
        if (digit === '.' && this.currentOperationText.innerText.includes('.')) {
            return
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    //processa todas as operações da calculadora
    processOperation(operation){
        //verifica se o valor atual é vazio
        if (this.currentOperationText.innerText === '' && operation !== 'C'){
            if (this.previousOperationText.innerText !== ''){
                //Muda a operação
                this.changeOperation(operation)
            }
            return
        }

       //captura o valor anterior e o atual da operação
        let operationValue
        let previous = +this.previousOperationText.innerText.split(' ')[0]
        let current = +this.currentOperationText.innerText

        switch(operation) {
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '*':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case 'DEL':
                this.processDelOperator()
                break
            case 'CE':
                this.processClearCurrentOperation()
                break
            case 'C':
                this.processClearAllOperation()
                break
            case '=':
                this.processEqualOperator()
                break
            default:
                return
        }
    }

    //muda os valores da tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        console.log(operationValue, operation, current, previous)
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation
        } else {
            //checa se o valor é 0, e se for, apenas adiciona o valor atual
            if (previous === 0) {
                operationValue = current
            }

            //adiciona o valor atual para o anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
        }
    }

    //modifica a operação 
    changeOperation(operation){
        const mathOperations = ['*', '/', '-', '+']        

        if (!mathOperations.includes(operation)){
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    //funcionalidade do botão DEL
    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    //limpa a operação atual
    processClearCurrentOperation(){
        this.currentOperationText.innerText = ''
    }

    //limpa todas as operações
    processClearAllOperation(){
        this.currentOperationText.innerText = ''
        this.previousOperationText.innerText = ''
    }

    //funcionalidade do botão de igual
    processEqualOperator(){
        const operation = previousOperationText.innerText.split(' ')[1]
        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText
        
        if (+value >= 0 || value === '.'){
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})