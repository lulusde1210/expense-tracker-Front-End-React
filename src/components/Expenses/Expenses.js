import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


const Expenses = ({ itemLists }) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const changeSelectedYear = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    const filteredList = itemLists.filter((item) =>
        item.date.getFullYear().toString() === filteredYear)


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} changeSelectedYear={changeSelectedYear} />
            <ExpensesChart expenses={filteredList} />
            <ExpenseList itemList={filteredList} />
        </Card>
    )
};

export default Expenses;