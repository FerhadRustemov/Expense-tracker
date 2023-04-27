import React from 'react';
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"


import './App.css';

function App() {

  const [data, setData] = React.useState([]);

  const inputTask = (text, amount) => {
    if (text && amount) {
      const obj = { id: Math.floor(Math.random() * 100), text: text, amount: amount };
      setData([...data, obj])
    }

  }
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance data={data} />
        <IncomeExpenses data={data} />
        <TransactionList data={data}/>
        <AddTransaction inputTask={inputTask} />

      </div>
    </div>
  );
}

export default App;
