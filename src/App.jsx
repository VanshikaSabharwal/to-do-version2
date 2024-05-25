import React, { useState } from "react";
import Shepherd from "shepherd.js";
import "../node_modules/shepherd.js/dist/esm/css/shepherd.css";
import "./App.css";
import TodayDate from "./components/Date";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [list, setList] = useState([]);

  // Shepherd.js tour steps
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      classes: "shepherd-theme-dark",
      scrollTo: true,
    },
  });

  tour.addStep({
    id: "welcome",
    text: "Welcome to your To-Do List app! Let's take a tour.",
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "date",
    text: "Here you can see today's date.",
    attachTo: {
      element: ".today-date",
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "input",
    text: "Type your to-do items here.",
    attachTo: {
      element: "input",
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "list",
    text: "Your to-do items will appear here.",
    attachTo: {
      element: ".todo-list",
      on: "bottom",
    },
    buttons: [
      {
        text: "Done",
        action: tour.complete,
      },
    ],
  });

  // Function to add item to the list of tasks
  function handleChange(event) {
    const newValue = event.target.value;
    setInputItem(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    setList((prevItem) => {
      return [...prevItem, inputItem];
    });
    setInputItem(""); // Reset input after updating the list
  }

  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <TodayDate />
      <div className="toDoList">
        <div className="container">
          <div className="heading">
            <h2>To-Do-List</h2>
            <h3>Planner</h3>
          </div>
          <form action="">
            <input onChange={handleChange} value={inputItem} type="text" />
            <button className="addBtn" onClick={handleSubmit}>
              Add
            </button>
          </form>
          <button className="shepherdTourBtn" onClick={() => tour.start()}>
            Start Tour
          </button>
          <div>
            <ul className="todo-list">
              {list.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
