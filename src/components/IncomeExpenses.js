import React from 'react'

const IncomeExpenses = ({ data }) => {

  const incomeAmounts = data.filter(ex => ex.amount > 0);
  const expenseAmounts = data.filter(ex => ex.amount < 0);

  const income = incomeAmounts.reduce((total, ex) => total + ex.amount, 0);
  const expense = expenseAmounts.reduce((total, ex) => total - ex.amount, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses