import React from 'react';

const ExpenseItem = ({item}) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  )
};

export default ExpenseItem;