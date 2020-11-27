import "./App.css";
import safecode from './safecode';
import React, { useState } from 'react';

function App() {

  const [code, setCode] = useState(safecode(8));
  const [len, setLen] = useState(0);
  const [msg, setMsg] = useState("Suggested safe code is");

  const handleChange = () => {
    if (len) {
      if (len < 8) {
        alert("length too small");
        setCode(safecode(8));
        setMsg("Suggested safe code is")
      } else {
        setCode(safecode(len));
        setMsg('Your safe code is')
      }
    } else {
      setCode(safecode(8));
      setMsg("Suggested safe code is")
    }
  };

  return (
    <div className="App">
      <header className="header">
        <p className="heading">safecode</p>
      </header>
      <form className="form">
        <div className="form-group">
          <label htmlFor="length">Length</label>
          <input
            type="number"
            name="length"
            id="length"
            className="length-input"
            placeholder="Enter desired safecode length"
            onChange={(e) => setLen(Number(e.target.value))}
          />
        </div>
        <p className="lead">Pick a Color</p>
        <div className="form-group-container">
          <div className="form-group">
            {[
              { id: 1, color: "red" },
              { id: 2, color: "green" },
              { id: 3, color: "blue" },
            ].map(({ id, color }) => (
              <button key={id} className={`btn btn-${color} btn-color`} type="button">
                {id}
              </button>
            ))}
          </div>
        </div>
      </form>
      <div className="output">
        <p className="lead">{msg}</p>
        <p className="lead code">{code}</p>
      </div>
      <div className="controls form-group">
        <button className="btn btn-control">Prev Code</button>
        <button className="btn btn-control">Copy</button>
        <button className="btn btn-control" onClick={handleChange}>New Code</button>
      </div>
    </div>
  );
}

export default App;
