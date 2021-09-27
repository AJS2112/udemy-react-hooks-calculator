import React from 'react';
import ReactDom from 'react-dom';
import CalculatorService from './calculator.service';

describe('Teste do CalculatorService', () => {

    const [calculate, SUM, SUB, MUL, DIV] = CalculatorService();

    it('deve garantir que 1 + 4 = 5.', () => {
        let sum = calculate(1, 4, SUM);
        expect(sum).toEqual(5);
    });

    it('deve garantir que 1 - 4 = -3.', () => {
        let sub = calculate(1, 4, SUB);
        expect(sub).toEqual(-3);
    });

    it('deve garantir que 1 * 4 = 4', () => {
        let mul = calculate(1, 4, MUL);
        expect(mul).toEqual(4);
    });

    it('deve garantir que 1 / 4 = 0.25', () => {
        let div = calculate(1, 4, DIV);
        expect(div).toEqual(0.25);
    });

    it('deve retornar zero para operacao invalida', () => {
        let invalidOperation = calculate(1, 4, '%');
        expect(invalidOperation).toEqual(0);
    });
});