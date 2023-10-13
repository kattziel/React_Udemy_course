import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New computer',
    amount: 499.99,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 15.99,
    date: new Date(2020, 8, 7),
  },
  {
    id: 'e3',
    title: 'New phone',
    amount: 399.99,
    date: new Date(2021, 9, 28),
  },
  {
    id: 'e4',
    title: 'New TV',
    amount: 799.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e5',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e6',
    title: 'New Desk (wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e7',
    title: 'Groceries',
    amount: 129.99,
    date: new Date(2021, 8, 17),
  },
  {
    id: 'e8',
    title: 'Groceries',
    amount: 129.99,
    date: new Date(2022, 3, 15),
  },
  {
    id: 'e9',
    title: 'Headphones',
    amount: 59.49,
    date: new Date(2022, 5, 22),
  },
  {
    id: 'e10',
    title: 'Online Course',
    amount: 229.99,
    date: new Date(2022, 7, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
