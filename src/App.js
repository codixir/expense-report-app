import React from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
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

  return (
    <div className="App">
      <ExpenseForm />
    </div>
  );
}

export default App;
