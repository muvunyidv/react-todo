import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "" || tasks.includes(newTask.trim())) return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="flex w-full justify-between p-5">
      <div className="flex flex-col w-[50%] h-[190px] bg-gray-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-center font-bold text-xl mb-4">Add New Task</h2>
        <input
          type="text"
          className="p-2 rounded mb-2 border border-gray-400"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Save
        </button>
      </div>
      <div className="flex-1 w-[100%] ml-5 bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-center font-bold text-xl mb-4">To-Do List</h2>
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-green-500">
            <tr>
              <th className="p-2">No</th>
              <th className="p-2">Todos</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteTask(task)}
                    className="bg-red-900 text-white p-2 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
