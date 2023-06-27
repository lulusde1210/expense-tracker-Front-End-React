import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({ onSaveExpenseData, onCancleForm }) => {
    const [formData, setFormData] = useState({ title: '', amount: '', date: '' });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, [name]: value }
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onSaveExpenseData(formData);
        setFormData({ title: '', amount: '', date: '' })
    };

    const handleCancelButton = (e) => {
        onCancleForm();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        onChange={changeHandler}
                        value={formData.title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        name='amount'
                        onChange={changeHandler}
                        min='0.01'
                        step='0.01'
                        value={formData.amount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        name='date'
                        onChange={changeHandler}
                        min='2019-01-01'
                        max='2023-12-31'
                        value={formData.date} />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={handleCancelButton}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>

            </div>

        </form>
    )
};

export default ExpenseForm;