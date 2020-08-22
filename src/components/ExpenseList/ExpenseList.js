import React, { useEffect, useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Table from 'react-bootstrap/Table'

const ExpenseList = ({ expenseData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(expenseData);
  }, [expenseData]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Description {expenseData.length}</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        { 
          expenseData.map((item) => {
            return (
              <ExpenseItem key={item.id} item={item}/>
            );
          })}        
      </tbody>
    </Table>    
  )
};

export default ExpenseList;