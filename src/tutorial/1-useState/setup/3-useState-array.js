import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => (e) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((p) => {
        const { id, name } = p;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            {/*<button className="btn" onClick={() => removeItem(id)}>*/}
            <button className="btn" onClick={removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};
export default UseStateArray;
