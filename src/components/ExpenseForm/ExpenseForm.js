import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './ExpenseForm.css';

const ExpenseForm = ({ expenses, add }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [currentTotal, setCurrentTotal] = useState(0);
  const [isValid, setValidation] = useState(true);
  const [isDisabled, setDisabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!desc.length || desc == ' ') || amount < 0 || (!currency.length || currency == ' ')) {
      setValidation(false);
      return;
    }

    setValidation(true);

    const expense = {
      description: desc,
      amount: amount,
      currency: currency
    };

    const data = expenses.data;

    if (data.length < 5 && currentTotal <= 1000 && currentTotal == 0) {
      if (currentTotal == 0) {
        setCurrentTotal(expense.amount);
      }
  
      if (data.length) {
        let total = data.reduce( ( sum, { amount } ) => sum + amount , 0)
        setCurrentTotal(total + expense.amount);
      }
    }
    
    if (data.length < 5 && currentTotal <= 1000) {
      expense.id = data.length;
      add(expense);
    } else {
      setDisabled(true);
    }
        
    setDesc('');
    setAmount(0);
    setCurrency('');  
  }

  return (
    <>
      {
        isValid ? '': <Alert variant="danger">Enter valid values</Alert>
      }

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="description">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={desc} placeholder="Description" onChange={e => setDesc(e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="amount">
          <Form.Label column sm={2}>
            Amount
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" value={amount} placeholder="Amount" onChange={e => setAmount(Number(e.target.value))} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="currency">
          <Form.Label column sm={2}>
            Currency
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={currency} placeholder="Currency" onChange={e => setCurrency(e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button disabled={isDisabled} type="submit">Add</Button>
          </Col>
        </Form.Group>
      </Form>
      <p className="current-total">Total: {currentTotal}</p>
    </>
  )
};

export default ExpenseForm;