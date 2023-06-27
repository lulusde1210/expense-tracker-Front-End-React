import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({ onAddExpense }) => {
    const [formOpen, setFormOpen] = useState(false);

    const saveExpenseDataHandler = (formData) => {
        const expenseData = {
            ...formData, id: Math.random().toString()
        };
        onAddExpense(expenseData)
        setFormOpen(false)
    };

    const AddNewExpenseButtonHandler = (e) => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    return (

        <div className='new-expense'>
            {!formOpen && <button onClick={AddNewExpenseButtonHandler}>Add New Expense</button>}
            {formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancleForm={closeForm} />}
        </div>
    )
};

export default NewExpense;