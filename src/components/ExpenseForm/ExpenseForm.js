import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const ExpenseForm = () => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(desc);
    console.log(amount);
    console.log(currency);
  }

  const handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    if (id === 'description') setDesc(value);
    if (id === 'amount') setAmount(value);
    if (id === 'currency') setCurrency(value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="description">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Description" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="amount">
        <Form.Label column sm={2}>
          Amount
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Amount" onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="currency">
        <Form.Label column sm={2}>
          Currency
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Currency" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit Expense</Button>
        </Col>
      </Form.Group>
    </Form>
  )
};

export default ExpenseForm;