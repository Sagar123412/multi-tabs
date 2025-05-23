import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTodo, removeTodo } from '../../redux/slices/todosSlice';

const TabFour = () => {
  const [text, setText] = useState('');
  const todos = useAppSelector((state: any) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { dispatch(addTodo(text)); setText(''); }}>Add</button>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>
            {todo} <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabFour;
