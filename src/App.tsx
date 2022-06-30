import React from 'react';
import Card, { CardVariant } from './components/Card';

import EventExample from './components/EventsExample';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
   return (
      <div className='App'>
         <EventExample />
         <Card
            onClick={(num: number) => console.log('button', num)}
            width='200px'
            height='200px'
            variant={CardVariant.outlined}
         >
            <button>Кнопка</button>
         </Card>
      </div>
   );
}

export default App;
