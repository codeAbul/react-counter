import React, { useState, Fragment } from "react";

function Counter({ initialCount = 0 } = {}) {
  var [count, setCount] = useState(initialCount);

  function onIncrement() {
    setCount(count + 1);
  }

  function onDecrement() {
    setCount(count - 1);
  }

  return (
    <Fragment>
      <button class="subtract" onClick={onDecrement}>
        -
      </button>
      <p>{count}</p>
      <button class="add" onClick={onIncrement}>
        +
      </button>
    </Fragment>
  );
}

export default Counter;
