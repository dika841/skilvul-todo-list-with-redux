import FilteredButton from "./components/FilteredButton";
import InputTodo from "./components/InputTodo";
import ContentLayout from "./layouts/content-layout";
import MainLayout from "./layouts/main-layout";
import Button from "./components/Button";
import Card from "./components/Card";
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
  filterTodo,
} from "./redux/action/todosAction";
import { useState } from "react";

const App = () => {
  const todos = useSelector((state) => state.todo);
  const filterTodoItems = useSelector((state) => state.filterTodo);
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const [updateTodoId, setUpdateTodoId] = useState("");
  const [updateTodoTitle, setUpdateTodoTitle] = useState("");

  const listSelected = [
    { id: 1, filter: "ALL" },
    { id: 2, filter: "ACTIVE" },
    { id: 3, filter: "COMPLETED" },
  ];

  const handleAddTodo = () => {
    if (todoItem !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          title: todoItem,
          completed: false,
        })
      );
      setTodoItem("");
    }
  };

  const handleUpdateTodo = (todoId) => {
    const newTodoItem = todos.find((item) => item.id === todoId);
    if (newTodoItem) {
      setUpdateTodoId(todoId);
      setUpdateTodoTitle(newTodoItem.title);
    }
  };
  const handleSaveUpdateTodo = () => {
    if (updateTodoTitle !== "") {
      dispatch(updateTodo(updateTodoId, updateTodoTitle));
      setUpdateTodoId("");
      setUpdateTodoTitle("");
    }
  };

  const handleCompleteTodo = (todoId) => {
    dispatch(completeTodo(todoId));
  };

  const handleFilterTodo = (filter) => {
    dispatch(filterTodo(filter));
  };

  const handleGetTodoFiltered = () => {
    if (filterTodoItems == "COMPLETED") {
      return todos.filter((el) => el.completed);
    }

    if (filterTodoItems == "ACTIVE") {
      return todos.filter((el) => !el.completed);
    }
    return todos;
  };

  return (
    <>
      <MainLayout>
        <ContentLayout>
          <h1 className="font-semibold text-[19px] text-center md:text-start md:text-3xl">
            What's the plan for today?
          </h1>
          <InputTodo
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          >
            <Button name="Add" onClick={handleAddTodo} />
          </InputTodo>

          <div className="flex gap-x-4">
            {listSelected.map((el) => (
              <FilteredButton
                bgActive={
                  el.filter == filterTodoItems ? "bg-teal-600" : "bg-gray-400"
                }
                onClick={() => handleFilterTodo(el.filter)}
                key={el.id}
                filtered={el.filter}
              />
            ))}
          </div>

          {handleGetTodoFiltered().map((el, idx) => (
            <Card
              className={`${
                el.completed ? "line-through decoration-2 " : "none"
              } text-zinc-700 capitalize`}
              label={el.title}
              value={el.completed}
              checked={el.completed}
              key={idx}
              onChange={() => handleCompleteTodo(el.id)}
            >
              {updateTodoId === el.id ? (
                <>
                  <InputTodo
                    value={updateTodoTitle}
                    onChange={(e) => {
                      setUpdateTodoTitle(e.target.value);
                    }}
                  >
                    <Button name="Save" onClick={handleSaveUpdateTodo} />
                  </InputTodo>
                </>
              ) : (
                <>
                  {!el.completed && (
                    <>
                      <MdModeEditOutline
                        onClick={() => handleUpdateTodo(el.id)}
                        className="text-xl md:text-2xl cursor-pointer text-zinc-700 hover:scale-105 hover:text-green-600"
                      />
                    </>
                  )}
                  <MdDeleteForever
                    onClick={() => dispatch(deleteTodo(el.id))}
                    className="text-xl md:text-2xl cursor-pointer text-zinc-700 hover:scale-105 hover:text-red-600"
                  />
                </>
              )}
            </Card>
          ))}
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default App;
