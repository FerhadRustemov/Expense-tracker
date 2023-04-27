import React from 'react'

const Balance = ({data}) => {
  const positiveAmounts = data.filter(ex => ex.amount > 0);
  const negativeAmounts = data.filter(ex => ex.amount < 0);

  const positiveTotal = positiveAmounts.reduce((total, ex) => total + ex.amount, 0);
  const negativeTotal = negativeAmounts.reduce((total, ex) => total - ex.amount, 0);
  const balance = positiveTotal - negativeTotal;

  const balanceColor = balance < 0 ? 'red' : 'green';
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{ color: balanceColor }}>${Math.abs(balance).toFixed(2)}</h1>
    </div>
  )
}

export default Balance
