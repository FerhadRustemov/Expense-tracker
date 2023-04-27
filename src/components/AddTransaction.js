import React from 'react'

const AddTransaction = ({inputTask}) => {
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    inputTask(text,amount);
    setText("");
    setAmount(0);
    
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction