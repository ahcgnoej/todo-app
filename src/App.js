import logo from './logo.svg';
import React,{useRef, useState,useCallback} from 'react';
import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoListItem from './Components/TodoListItem';
import TodoList from './Components/TodoList'


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "밥그만먹기",
      checked: true,
    },
    {
      id: 2,
      text: "자기",
      checked: true,
    },
    {
      id: 3,
      text: "공부하기",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onRemove = useCallback(
    (id) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    },
    [todo]
  );

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodo([...todo, newTodo]);
      nextId.current += 1;
    },
    [todo]
  );

  const onToggle=useCallback(
    id=>{
      setTodo(
        todo.map(todo=>
          todo.id===id?{...todo,checked:  !todo.checked}: todo,
          ),
      );
    },[todo],
  ); 

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* onRemove 함수를 TodoList로 전달 */}
      <TodoList todo={todo} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
