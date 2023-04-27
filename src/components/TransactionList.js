import React from 'react'
import Transaction from './Transaction'
import { v4 as uuidv4 } from 'uuid';

const TransactionList = ({ data }) => {
    return (

        <>
            <h3>History</h3>
            <ul className="list">

            {data.map(ex => <Transaction key={uuidv4()} text={ex.text} amount={ex.amount} />)}

            </ul>
            



        </>
    )
}

export default TransactionList