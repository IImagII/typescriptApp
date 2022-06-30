import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';

const UserPage: FC = () => {
   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      fetchUsers();
   }, []);

   async function fetchUsers() {
      try {
         const response = await axios.get<IUser[]>(
            'https://jsonplaceholder.typicode.com/users'
         );
         setUsers(response.data);
      } catch (e) {
         alert(e);
      }
   }
   return (
      <div>
         <List
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
         />
      </div>
   );
};
export default UserPage;
