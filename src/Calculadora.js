/* eslint-disable no-unused-vars */
import React from 'react'
import './Calculadora.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'




function Calculadora() {
  return (
    <div>
      <div style={{
        background: 'red',
        backgroundColor: '#007bff',
        padding: '5px',
        margin: '5px',
        width: '400px',
      }}>
        <Container>
          <Row>
            <Col xs="3">
              <Button variant="danger">C</Button>
            </Col>
            <Col xs="9">
              <Form.Control type="text"
                name="txtNumeros"
                class="text-right"
                readOnly="readonly" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light"
                backgroundColor='#FFF'
              >7</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">8</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">9</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="warning">/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">4</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">5</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">6</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="warning">*</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="ligth">1</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">2</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">3</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="warning">-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">0</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="light">.</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="success">=</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="warning">+</Button>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Calculadora;
