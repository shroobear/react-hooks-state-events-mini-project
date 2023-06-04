import React from "react";
import Task from "./Task";

function TaskList({ categories, tasks, onDeleteTask }) {
  const displayTasks = tasks.map((task) => (
    <Task
      key={task.text}
      category={task.category}
      text={task.text}
      onDeleteTask={() => onDeleteTask(task.text)}
    />
  ));
  return (
    <div className="tasks">
      {displayTasks}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
