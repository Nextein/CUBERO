import { useState } from "react";

function Calculator() {
  const [state, setState] = useState({
    balance: 0,
    n1: 0,
    n2: 0
  });

  function setN1(e) {
    setState({
      ...state,
      n1: e.target.value
    });
  }

  function setN2(e) {
    setState({
      ...state,
      n2: e.target.value
    });
  }

  return (<>
    <h2>Calculator</h2>
    <form>
      <input
        type="number"
        value={state.n1}
        name="n1"
        onChange={setN1}
      />
      <input
        type="number"
        value={state.n2}
        name="n2"
        onChange={setN2}
      />
      <input
        type="submit"
        value="Calculate"
        name="submit"
      />
    </form>
    <p>Result: {Number(state.n1) + Number(state.n2)}</p>
  </>);
}

export default Calculator;