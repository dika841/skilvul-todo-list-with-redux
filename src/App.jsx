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
} from "./redux/action/todosAction";
import { useState } from "react";

const App = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const [updateTodoId, setUpdateTodoId] = useState(null);
  const [updateTodoTitle, setUpdateTodoTitle] = useState("");

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
    console.log(todos);
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
      setUpdateTodoId(null);
      setUpdateTodoTitle("");
    }
  };

  const handleCompleteTodo = (todoId) => {
    dispatch(completeTodo(todoId));
  };

  return (
    <>
      <MainLayout>
        <ContentLayout>
          <h1 className="font-semibold text-3xl">What's the plan for today?</h1>
          <InputTodo
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          >
            <Button name="Add" onClick={handleAddTodo} />
          </InputTodo>

          <div className="flex gap-x-4">
            <FilteredButton filtered="All" />
            <FilteredButton filtered="Active" />
            <FilteredButton filtered="Complete" />
          </div>

          {todos.map((el, idx) => (
            <Card
              className={`${
                el.completed ? "line-through" : "none"
              } text-zinc-700 `}
              label={el.title}
              value={el.completed}
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
                        size={30}
                        className="cursor-pointer text-zinc-700 hover:scale-105 hover:text-green-600"
                      />
                    </>
                  )}
                  <MdDeleteForever
                    onClick={() => dispatch(deleteTodo(el.id))}
                    size={30}
                    className="cursor-pointer text-zinc-700 hover:scale-105 hover:text-red-600"
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
