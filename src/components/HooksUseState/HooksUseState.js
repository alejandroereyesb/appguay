import React, { useState } from "react";

const HooksUseState = () => {

  // Estados
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleAddClick = () => {
    setCount(count + 1)
  }

  const handleSubClick = () => {
    setCount(count - 1)
  }

  const handleResetClick = () => {
    setCount(0)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <>
      <button name='add' onClick={handleAddClick} >+</button>
      <button name='sub' onClick={handleSubClick} >-</button>
      <button name='reset' onClick={handleResetClick} >Reset</button>
      <h1>The value is: {count}</h1>

      <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" onChange={handleChange}></input>
                <br/><br/>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" onChange={handleChange}></input>

                <button>Login</button>
            </form>
            <p>{JSON.stringify(values)}</p>
    </>
  );
}

export default HooksUseState;
