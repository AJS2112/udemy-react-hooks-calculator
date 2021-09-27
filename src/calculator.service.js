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

    return [
        calculate,
        SUM,
        SUB,
        MUL,
        DIV
    ];
}

export default CalculatorService;