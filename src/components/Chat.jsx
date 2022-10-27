import React from 'react';

const Chat =()=> {
  return (
    <div className='fixed bottom-5 sm: right-10 right-4 z-[999] cursor-pointer text-white text-5xl bg-purple-400 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'>
      <ion-icon name='chatbox-ellipses-sharp'></ion-icon>
    </div>
  );
}

export default Chat;
