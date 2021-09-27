function CalculatorService() {

    const SUM = '+';
    const SUB = '-';
    const MUL = '*';
    const DIV = '/';

    function calculate(number1, number2, operation) {
        let result;

        switch (operation) {
            case SUM:
                result = number1 + number2;
                break;
            case SUB:
                result = number1 - number2;
                break;
            case MUL:
                result = number1 * number2;
                break;
            case DIV:
                result = number1 / number2;
                break;
            default:
                result = 0;
                break;
        }

        return result;
    }

    function concatNumber(currentNumber, concatenatedNumber) {
        //caso contenha apenas '0' ou null, reinicia o valor
        if (currentNumber === '0' || currentNumber === null) {
            currentNumber = '';
        }

        // primeiro digito for '.', concatena '0' antes do ponto
        if (concatenatedNumber === '.' && currentNumber === '') {
            return '0.';
        }

        // caso '.' digitado e já contenha um ponto, apenas retornar
        if (concatenatedNumber === '.' && currentNumber.indexOf('.') > -1) {
            return currentNumber;
        }

        return currentNumber + concatenatedNumber;
    }

    return [
        calculate,
        concatNumber,
        SUM,
        SUB,
        MUL,
        DIV
    ];
}

export default CalculatorService;