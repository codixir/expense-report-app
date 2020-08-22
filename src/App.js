import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import './App.css';

const expenses = {
    data: [
    ],
    maxNumOfExpenses: 5,
    maxTotalExpense: {
      amount: 1000,
      currency: 'CAD',
    },
    totalExpense: 0
};

function App() {
  const [expenseData, setData] = useState([]);
  const add = (data) => {
    expenses.data.push(data);

    setData([...expenses.data]);
  };
  
  useEffect(() => {
    setData(expenses.data);
  }, [expenses]);

  return (
    <div className="App">
      <ExpenseForm expenses={expenses} add={add} />
      <ExpenseList expenseData={expenseData}/>
    </div>
  );
}

export default App;
