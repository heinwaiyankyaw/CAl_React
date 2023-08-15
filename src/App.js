import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("0");

  const handleInput = (input) => {
    if (value === "0") {
      setValue(input);
    } else {
      setValue((prevValue) => prevValue + input);
    }
  };

  const handleDelete = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleClear = () => {
    setValue("0");
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <form action="" className="calculator">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={() => handleInput(".")} />
            <input type="button" value="/" onClick={() => handleInput("/")} />
          </div>
          <div>
            {[7, 8, 9, "*"].map((num) => (
              <input
                key={num}
                type="button"
                value={num}
                onClick={() => handleInput(num.toString())}
              />
            ))}
          </div>
          <div>
            {[4, 5, 6, "+"].map((num) => (
              <input
                key={num}
                type="button"
                value={num}
                onClick={() => handleInput(num.toString())}
              />
            ))}
          </div>
          <div>
            {[1, 2, 3, "-"].map((num) => (
              <input
                key={num}
                type="button"
                value={num}
                onClick={()=>handleInput(num.toString())}
              />
              ))}
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleInput("00")} />
            <input type="button" value="0" onClick={() => handleInput("0")} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleCalculate}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
