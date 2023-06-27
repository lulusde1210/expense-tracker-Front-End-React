import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';



const ExpenseList = ({ itemList }) => {
    if (itemList.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return (
        <ul className='expenses-list'>
            {itemList.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            })
            }
        </ul>

    )
};

export default ExpenseList;