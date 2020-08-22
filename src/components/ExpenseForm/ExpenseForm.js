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
    debugger;
  }

  const handleChange = (e) => {
    debugger;
  }

  return (
    // <form onSubmit={handleSubmit}>
    //     <input type="text" name="description" placeholder="Enter description" onChange={handleChange}/>
    //     <input type="number" name="amount" placeholder="Enter amount" onChange={handleChange}/>
    //     <input type="text" name="currency" placeholder="Enter currency" onChange={handleChange}/>
    //     <button type="submit">Submit Expense</button>
    // </form>

    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formHorizontalDescription">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Description" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalAmount">
        <Form.Label column sm={2}>
          Amount
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Amount" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalCurrency">
        <Form.Label column sm={2}>
          Currency
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Currency" />
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