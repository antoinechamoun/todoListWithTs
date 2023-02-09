import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface PropsType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: PropsType) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos-heading">Active tasks</span>
            {todos?.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos-heading">Completed tasks</span>
            {completedTodos?.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                  key={todo.id}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
