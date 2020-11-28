import "./App.css";
import safecode from "./safecode";
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [code, setCode] = useState(safecode(8));
  const [len, setLen] = useState("");
  const [msg, setMsg] = useState("Suggested safe code is");
  const [systematic, setSystematic] = useState(false);
  const inputRef = useRef(null);

  const handleChange = () => {
    if (typeof len === "number") {
      if (len < 8 && len >= 0) {
        Swal.fire({
          title: "Oops",
          text: "Entered length is too short, Minimum code length is 8",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Try again",
          cancelButtonText: "No",
        }).then((response) => {
          if (response.value) {
            inputRef.current.focus();
            setLen("");
          } else if (response.dismiss === Swal.DismissReason.cancel) {
            setLen(12);
            setCode(safecode(12, systematic));
            Swal.fire("Cancelled", "Suggested code is avilable", "error");
          }
        });
        setCode(safecode(8, systematic));
        setSystematic((v) => !v);
        setMsg("Suggested safe code is");
      } else if (len > 72) {
        Swal.fire({
          title: "Oops",
          text: "Entered length is too Long, Maximum code length is 72",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Try again",
          cancelButtonText: "No",
        }).then((response) => {
          if (response.value) {
            inputRef.current.focus();
            setLen("");
          } else if (response.dismiss === Swal.DismissReason.cancel) {
            setLen(12);
            setCode(safecode(12, systematic));
            Swal.fire("Cancelled", "Suggested code is avilable", "error");
          }
        });
        setSystematic((v) => !v);
        setMsg("Suggested safe code is");
      } else {
        setCode(safecode(len, systematic));
        setMsg("Your safe code is");
        setSystematic((v) => !v);
      }
    } else {
      setCode(safecode(8, systematic));
      setMsg("Suggested safe code is");
      setSystematic((v) => !v);
    }
  };

  const handleCopy = () => {
    Swal.fire({
      title: "Success",
      text: "Code Copied To Clipboard",
      icon: "success",
    });
  };

  return (
    <div className="App">
      <header className="header">
        <p className="heading">SafeCode</p>
      </header>
      <div className="form">
        <div className="form-group">
          <label htmlFor="length">Length</label>
          <input
            type="number"
            name="length"
            value={len}
            id="length"
            ref={inputRef}
            className="length-input"
            placeholder="Enter desired safecode length"
            onChange={(e) => setLen(Number(e.target.value))}
          />
        </div>
        <br />

        <div className="form-group">
          {[
            { id: 1, color: "red" },
            { id: 2, color: "green" },
            { id: 3, color: "blue" },
            { id: 4, color: "black" },
          ].map(({ id, color }) => (
            <button
              key={id}
              className={`btn btn-${color} btn-color`}
              type="button"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      <div className="output">
        <p className="lead">{msg}</p>
        <p className="lead code">{code}</p>
      </div>

      <div className="controls form-group">
        <CopyToClipboard
          onCopy={handleCopy}
          options={{ message: "Whoa!" }}
          text={code}
        >
          <button className="btn btn-control" onClick={handleCopy}>
            Copy
          </button>
        </CopyToClipboard>
        <button className="btn btn-control" onClick={handleChange}>
          New Code
        </button>
      </div>
    </div>
  );
}

export default App;
