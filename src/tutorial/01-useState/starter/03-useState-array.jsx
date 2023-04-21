import { data } from "../../../data.js";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
