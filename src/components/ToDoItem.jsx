import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);
  function crossLine() {
    setChecked(!checked);
  }

  return (
    <div className="todo-item">
      <li
        style={{ textDecoration: checked ? "line-through" : "none" }}
        onClick={crossLine}
      >
        {props.text}
      </li>
      <span
        className="cross"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        +
      </span>
    </div>
  );
}
export default ToDoItem;
