import React, { useState } from 'react';
import './calculator.css';
import {
  Jumbotron, Container, Row, Col, Button, Form
} from 'react-bootstrap';
import CalculatorService from './calculator.service';

function Calculator() {

  const [calculate, concatNumber, SUM, SUB, MUL, DIV] = CalculatorService();

  const [txtNumbers, setTxtNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);


  function addNumber(number) {
    let result;
    if (operation === null) {
      result = concatNumber(number1, number);
      setNumber1(result);
    } else {
      result = concatNumber(number2, number);
      setNumber2(result);
    }

    setTxtNumbers(result);
  }

  function defineOperation(op) {
    // apenas define a operação caso ela não exista
    if (operation === null) {
      setOperation(op);
      return;
    }
    // caso a operação estiver definida e numero2 selecionado, realizar o calculo da operação
    if (number2 !== null) {
      const result = calculate(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTxtNumbers(result.toString());
    }
  }

  function calculateAction() {
    if (number2 === null) {
      return;
    }

    const result = calculate(parseFloat(number1), parseFloat(number2), operation);
    setNumber1(result.toString());
    setNumber2(null);
    setTxtNumbers(result.toString());
  }

  function clean() {
    setTxtNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={clean} >C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumber"
              className="text-right"
              readOnly="readonly"
              value={txtNumbers} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber('7')}>7</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('8')}>8</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('9')}>9</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => defineOperation('/')}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber('4')}>4</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('5')}>5</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('6')}>6</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => defineOperation('*')}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber('1')}>1</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('2')}>2</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('3')}>3</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => defineOperation('-')}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber('0')}>0</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber('.')} >.</Button>
          </Col>
          <Col>
            <Button variant="success" onClick={calculateAction}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => defineOperation('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
