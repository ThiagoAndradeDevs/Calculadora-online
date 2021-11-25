/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './Calculadora';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculadora', () => {
  it('deve reinderiza o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('deve limpar o campo de numero', () => {
    const { getByTestId, getByTest } = render(<Calculadora />);
    fireEvent.click(getByTest('2'));
    fireEvent.click(getByTest('C'));
    expect(getByTestId('textNumeros')).toHaveValue('0')
  })
  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByTest } = render(<Calculadora />)
    fireEvent.click(getByTest('2'));
    fireEvent.click(getByTest('+'));
    fireEvent.click(getByTest('3'));
    fireEvent.click(getByTest('='));
    expect(getByTestId('textNumeros')).toHaveValue('5')
  })
  it('deve subtrair 5 - 3 e obter 2', () => {
    const { getByTestId, getByTest } = render(<Calculadora />)
    fireEvent.click(getByTest('5'));
    fireEvent.click(getByTest('-'));
    fireEvent.click(getByTest('3'));
    fireEvent.click(getByTest('='));
    expect(getByTestId('textNumeros')).toHaveValue('2')
  })
  it('deve somar 6 / 3 e obter 2', () => {
    const { getByTestId, getByTest } = render(<Calculadora />)
    fireEvent.click(getByTest('6'));
    fireEvent.click(getByTest('/'));
    fireEvent.click(getByTest('3'));
    fireEvent.click(getByTest('='));
    expect(getByTestId('textNumeros')).toHaveValue('2');
  })
  it('deve multiplica 2 * 3 e obter 2', () => {
    const { getByTestId, getByTest } = render(<Calculadora />)
    fireEvent.click(getByTest('2'));
    fireEvent.click(getByTest('*'));
    fireEvent.click(getByTest('3'));
    fireEvent.click(getByTest('='));
    expect(getByTestId('textNumeros')).toHaveValue('6');
  })
  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByTest } = render(<Calculadora />)
    fireEvent.click(getByTest('2'));
    fireEvent.click(getByTest('.'));
    fireEvent.click(getByTest('5'));
    fireEvent.click(getByTest('+'));
    fireEvent.click(getByTest('3'));
    fireEvent.click(getByTest('='));
    expect(getByTestId('textNumeros')).toHaveValue('5');
  })
})
