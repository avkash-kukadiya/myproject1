import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FiStar, FiTrash2, FiX } from "react-icons/fi";
import { HOC } from "../componnets/HOC";

const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting with CEO", completed: false, starred: false },
    { id: 2, text: "Pick up kids from school", completed: false, starred: true },
    { id: 3, text: "Shopping with Brother", completed: false, starred: false },
    { id: 4, text: "Review with HR", completed: true, starred: false },
    { id: 5, text: "Going to Dia's School", completed: false, starred: false },
    { id: 6, text: "Check design files", completed: false, starred: true },
    { id: 7, text: "Update File", completed: false, starred: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
          starred: false,
        },
      ]);
      setNewTask("");
      setShowInput(false);
    }
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleStar = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, starred: !task.starred } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className=" mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                To-Do List
              </h1>

              {!showInput ? (
                <button
                  onClick={() => setShowInput(true)}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <BiPlus size={18} />
                  <span>Add New Task</span>
                </button>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Enter task..."
                    className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={addTask}
                    className="bg-blue-600 text-white px-4 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowInput(false)}
                    className="bg-gray-100 text-gray-600 px-3 py-2.5 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              )}
            </div>
        <div className=" overflow-hidden">
          {/* Header */}
         

          {/* Tasks */}
          <div className="py-4 sm:py-6 space-y-2">
            {tasks.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No tasks yet. Add one to get started!</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={`group flex items-center gap-3 sm:gap-4 p-4 rounded-lg transition-all ${
                    task.completed
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      task.completed
                        ? "bg-white border-white"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                  >
                    {task.completed && (
                      <svg
                        className="w-3 h-3 text-blue-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </button>

                  {/* Text */}
                  <span
                    className={`flex-1 text-sm sm:text-base ${
                      task.completed ? "" : "text-gray-700"
                    }`}
                  >
                    {task.text}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    {/* Star */}
                    <button
                      onClick={() => toggleStar(task.id)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <FiStar
                        size={18}
                        className={
                          task.starred
                            ? "fill-yellow-400 text-yellow-400"
                            : task.completed
                            ? "text-white"
                            : "text-gray-300"
                        }
                      />
                    </button>

                    {/* Trash */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <FiTrash2
                        size={18}
                        className={
                          task.completed ? "text-white" : "text-gray-300"
                        }
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Stats */}
          {tasks.length > 0 && (
            <div className=" px-6 py-4 border-t border-gray-100">
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  Total: <b className="text-blue-600">{tasks.length}</b>
                </span>
                <span>
                  Completed:{" "}
                  <b className="text-green-600">
                    {tasks.filter((t) => t.completed).length}
                  </b>
                </span>
                <span>
                  Pending:{" "}
                  <b className="text-orange-600">
                    {tasks.filter((t) => !t.completed).length}
                  </b>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HOC(ToDo);
