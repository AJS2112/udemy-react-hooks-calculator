import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {

  test('deve renderizar o componente sem erros', () => {
    render(<Calculator />);
  });

  it('deve limpar o campo de numeros', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumbers')).toHaveValue('0');
  });

  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('5');
  });

  it('deve subtrair 5 - 3 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('2');
  });

  it('deve multiplicar 2 * 3 e obter 6', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('6');
  });

  it('deve dividir 6 / 3 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('2');
  });

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('5.5');
  });

});

