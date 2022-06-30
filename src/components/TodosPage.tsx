import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';
import axios from 'axios';
import List from './List';

const TodosPage: FC = () => {
   const [todos, setTodod] = useState<ITodo[]>([]);

   useEffect(() => {
      fetchTodos();
   }, []);

   async function fetchTodos() {
      try {
         const response = await axios.get<ITodo[]>(
            'https://jsonplaceholder.typicode.com/todos?_limit=10'
         );
         setTodod(response.data);
      } catch (e) {
         alert(e);
      }
   }
   return (
      <div>
         <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
         />
      </div>
   );
};
export default TodosPage;
