import { useState } from "react";
import $ from "jquery";
import "./App.css";

function App() {
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  // const handleChange = (e) => {
  //   setFirstOperand(e.target.value);
  //   setSecondOperand(e.target.value);
  // };

  const handleOperand1 = (e) => {
    setFirstOperand(e.target.value);
  };

  const handleOperand2 = (e) => {
    setSecondOperand(e.target.value);
  };

  const handleOperators = (e) => {
    setOperator(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  return (
    <div className="App">
      <form
        action="http://localhost:8000/PHP/server.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="firstOperand">First Operand: </label>

        <input
          type="number"
          id="firstOperand"
          name="firstOperand"
          value={firstOperand}
          onChange={(event) => handleOperand1(event)}
        />
        <br />
        <select
          name="operator"
          id="operator"
          onChange={(event) => handleOperators(event)}
        >
          <option value="plus">&#128125;</option>
          <option value="minus">&#128128;</option>
          <option value="multiply">&#128123;</option>
          <option value="division">&#128561;</option>
        </select>
        <br />
        <label htmlFor="secondOperand">Second Operand: </label>
        <input
          type="number"
          id="secondOperand"
          name="secondOperand"
          value={secondOperand}
          onChange={(event) => handleOperand2(event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
