import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpencse/NewExpense";
import startData from "./data/expense";



function App() {
  const [expense, setExpense] = useState(startData);
  const addExpenseHandler = (expenseData) => {

    const data = {
      id: expenseData.id,
      title: expenseData.title,
      amount: +expenseData.amount,
      date: new Date(expenseData.date.split('-'))
    }
    setExpense((prevExpense) => {
      return [...prevExpense, data]
    })
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses itemLists={expense} />
    </div>
  );
}

export default App;
