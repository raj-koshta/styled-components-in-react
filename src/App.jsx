import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const Button1 = styled.button({
    borderRadius: "8px",
    border: "2px solid grey",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: `${count <  5 ? "#052632" : "#047318"}`,
    cursor: "pointer",
    transition: "border-color 0.25s"
  });

  const Button2 = styled.button`
    border-radius: 8px;
    border: 1px solid white;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    /* background-color: ${count2 <  5 ? "#1a1a1a" : "#047318"}; */
    background-color: ${(props) => props.count2 <  5 ? "#1a1a1a" : "#047777"};
    cursor: pointer;
    transition: border-color 0.25s;
    margin-left: 80px;
  `;

  return (
    <>
      <h1>Styled-components-in-React</h1>
      <div className="card">
        <Button1 onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button1>

        <Button2 count2={count2} onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </Button2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
