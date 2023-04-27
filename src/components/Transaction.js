import React from 'react'

const Transaction = ({ exName, text, amount }) => {
    const transactionClass = amount < 0 ? "minus red" : "plus";

    return (


        <>
            <li className={transactionClass}>
                {text} <span>{amount}</span><button className="delete-btn">x</button>
            </li>

        </>
    )
}

export default Transaction