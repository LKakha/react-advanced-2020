import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const changeValue = (d) => () => {
    switch (d) {
      case -1:
        setValue(value - 1);
        break;
      case 0:
        setValue(0);
        break;
      case 1:
        setValue(value + 1);
        break;
      default:
    }
  };

  let v = value;
  const changeValueLater = (d) => () => {
    setTimeout(() => {
      v++;
      setValue(v);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={changeValue(-1)}>
          decrease
        </button>
        <button className="btn" onClick={changeValue(0)}>
          reset
        </button>
        <button className="btn" onClick={changeValue(1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={changeValueLater(1)}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
