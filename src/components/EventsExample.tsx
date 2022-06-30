import React, { ChangeEvent, FC, useState, useRef } from 'react';

const EventExample: FC = () => {
   const [value, setValue] = useState<string>('');
   const [isDrag, setIsDrag] = useState<boolean>(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(inputRef.current?.value);
   };

   const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
      console.log('drag');
   };

   const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(true);
   };
   const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(false);
   };
   const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(false);
      console.log('DROP');
   };

   return (
      <div>
         <input
            value={value}
            onChange={changeHandler}
            type='text'
            placeholder='Управляемый'
         />
         <input ref={inputRef} type='text' placeholder='Неуправляемый' />
         <button onClick={clickHandler}>нажми</button>
         <div
            draggable
            onDrag={dragHandler}
            style={{ width: 200, height: 200, background: 'red' }}
         ></div>
         <div
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragOverHandler}
            style={{
               width: 200,
               height: 200,
               background: isDrag ? 'red' : 'blue',
               marginTop: 15,
            }}
         ></div>
      </div>
   );
};
export default EventExample;
