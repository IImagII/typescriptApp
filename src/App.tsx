import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
   const users: IUser[] = [
      {
         id: 1,
         name: 'Idil',
         email: 'adasd@ss,ss',
         address: { city: 'Moskow', street: 'linina', zipcode: '85207' },
      },
      {
         id: 2,
         name: 'Vana',
         email: 'sdffdsd@ss,ss',
         address: { city: 'Kiev', street: 'Lexaa', zipcode: '85210' },
      },
   ];

   return (
      <div className='App'>
         <Card
            onClick={(num: number) => console.log('button', num)}
            width='200px'
            height='200px'
            variant={CardVariant.outlined}
         >
            <button>Кнопка</button>
         </Card>
         <UserList users={users} />
      </div>
   );
}

export default App;
