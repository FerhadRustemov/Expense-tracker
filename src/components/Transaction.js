import React from 'react'

const Transaction = ({ exName, text, amount , hanleDelete,ex }) => {
    const transactionClass = amount < 0 ? "minus red" : "plus";

    return (
        

        <>
            <li className={transactionClass}>
                {text} <span>{amount}</span><button onClick={() => hanleDelete(ex.id)} className="delete-btn">x</button>
            </li>

        </>
    )
}

export default Transaction