import "./App.css";

function App() {
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
              <button className={`btn btn-${color} btn-color`} type="button">
                {id}
              </button>
            ))}
          </div>
        </div>
      </form>
      <div className="output">
        <p className="lead">suggested code:</p>
        <p className="lead code">####</p>
      </div>
      <div className="controls form-group">
        <button className="btn btn-control">Prev Code</button>
        <button className="btn btn-control">Copy</button>
        <button className="btn btn-control">New Code</button>
      </div>
    </div>
  );
}

export default App;
