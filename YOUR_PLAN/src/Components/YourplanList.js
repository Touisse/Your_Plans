import React, { useState } from "react";
import PlanForm from "./PlanForm";
import Plan from "./Plan";

function YourplanList() {
  const [plans, setPlans] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newPlans = [todo, ...plans];

    setPlans(newPlans);
    console.log(...plans);
  };

  const updatePlan = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setPlans((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...plans].filter((todo) => todo.id !== id);

    setPlans(removedArr);
  };

  const completeTodo = (id) => {
    let updatedPlans = plans.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setPlans(updatedPlans);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <PlanForm onSubmit={addTodo} />
      <Plan
        plans={plans}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updatePlan}
      />
    </>
  );
}

export default YourplanList;
