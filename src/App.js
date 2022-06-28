import { useState } from "react";
import $ from "jquery";
import "./App.css";
import Guides from "./components/Guides";

function App() {
  //firstOperator and secondOperator store the input values
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");

  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  // Additional guides 
  const [showGuides, setShowGuides] = useState(false);

  //handleOperand1, handleOperand2 set the value on state everytime the input value changes
  const handleOperand1 = (e) => {
    setFirstOperand(e.target.value);
  };

  const handleOperand2 = (e) => {
    setSecondOperand(e.target.value);
  };
  //chosen operator is set in operator onchange
  const handleOperators = (e) => {
    setOperator(e.target.value);
  }

  const handleShowGuides = () => {
    setShowGuides(true);
  }

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
      <h1>Emoji Calculator</h1>
      <div className="form-container">
        <form
          action="http://localhost:8000/PHP/server.php"
          method="post"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="input-container">
            <input
              type="number"
              id="firstOperand"
              name="firstOperand"
              value={firstOperand}
              placeholder="Enter the first operand"
              onChange={(event) => handleOperand1(event)}
            />
            <br />
            {/* operator
            here
             alien --> addition
             skull --> subtraction
             ghost --> multiplication
             scream --> division

        */}
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
            {/* takes second operand input */}

            <input
              type="number"
              id="secondOperand"
              name="secondOperand"
              value={secondOperand}
              placeholder="Enter the second operand"
              onChange={(event) => handleOperand2(event)}
            />
          </div>
          {/* takes first operand input */}
          <div className="button-container">
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>
      {/* show calculation */}
      <p>
        {" "}
        <span>{result}</span>{" "}
      </p>
      {/* Additional part
        on button click guides will be shown on how to use the calculator
      */}
      <div className="guides">
        <button
          onClick={() => {
            setShowGuides(true);
            console.log("clicked");
          }}
        >
          Show Guides
        </button>
        {showGuides ? <Guides /> : ""}
      </div>
    </div>
  );
}

export default App;
