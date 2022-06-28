import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
   users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
   return (
      <div>
         {users.map((user) => (
            <div
               key={user.id}
               style={{ padding: 15, border: '1px solid #eee' }}
            >
               {user.id}.{user.name} Проживает в городе{user.address.city} по
               улице {user.address.street}
            </div>
         ))}
      </div>
   );
};

export default UserList;
