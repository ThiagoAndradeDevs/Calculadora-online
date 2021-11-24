/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Calculadora.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import CalculadoraService from './calculadora.service'


function Calculadora() {
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();
  const [txtNumeros, setTxtNumeros] = useState('0')
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);
  function adicionarNumero(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado)
    } else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado)
    }
    setTxtNumeros(resultado)
  }
  function definirOperacao(op) {
    // apenas define a operaçao caso kea nao exista 
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    //caso a operaçao estiver definida e numeo 2 selecionado, realize o calculo da operaçao
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }
  function acaoCalcular() {
    if (numero2 === null)
      return
  }
  const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
  setTxtNumeros(resultado);
}
function limpar() {
  setTxtNumeros('0');
  setNumero1('0');
  setNumero2(null);
  setOperacao(null)
}
return (
  <div className='container'>
    <div className='jumbotron'>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger"
              onClick={limpar}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readonly"
              value={txtNumeros} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('7')}>7</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('8')}>8</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('9')}>9</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="warning"
              onClick={() => definirOperacao('/')}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('4')}>4</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('5')}>5</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('6')}>6</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="warning"
              onClick={() => definirOperacao('*')}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="ligth"
              onClick={() => adicionarNumero('1')}>1</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('2')}>2</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('3')}>3</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="warning"
              onClick={() => definirOperacao('-')}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('0')}>0</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => adicionarNumero('.')}>.</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="success"
              onClick={acaoCalcular}>=</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="warning"
              onClick={() => definirOperacao('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </div>
  </div>

)


export default Calculadora;
