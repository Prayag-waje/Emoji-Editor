import React, { useState } from 'react'
import Emoji from './Emoji';
import { Sliders } from 'lucide-react';

function Home() {

    const [emoji, setEmoji]=  useState("😒");
    const [value, setValue]= useState("5");

  return (
    <div className='scale-z-100 '>
          <div className='text-5xl font-semibold flex justify-center scale-z-100 pt-10 text-zinc-400'>
              <h1>Playing with emoji <span className='text-blue-500'>using useState</span></h1>
          </div>

          <p className='text-2xl flex justify-center mt-8 text-zinc-600'>
              This is a simple React app demonstrates how to use the useState hook to manage state in a function component.
          </p>

          <div className='flex justify-center mt-10'>
              <div style={{ fontSize: `${value}rem` }} className={'bg-zinc-100 w-40 h-40 flex justify-center rounded-3xl items-center my-1 mx-auto border-zinc-300 border-2 shadow-2xl overflow-hidden'}>
              {emoji}
          </div>
            </div>
            <div className='flex justify-center mt-5'>
              {value}
              <input type="range" min="0" max="10" onChange={(e) => {
                  setValue(e.target.value);
              } } />
          </div><div className='flex justify-center '>
              <div className=' border-1 border-sky-100 bg-zinc-200 rounded-2xl shadow-xl w-fit  px-3 mt-10 flex justify-center items-center '>
                  <Emoji emoji={"😶‍🌫️"} setEmoji={setEmoji} />
                  <Emoji emoji={"🤣"} setEmoji={setEmoji} />
                  <Emoji emoji={"😁"} setEmoji={setEmoji} />
                  <Emoji emoji={"🤡"} setEmoji={setEmoji} />
                  <Emoji emoji={"😊"} setEmoji={setEmoji} />
                  <Emoji emoji={"😎"} setEmoji={setEmoji} />
                  <Emoji emoji={"😂"} setEmoji={setEmoji} />
              </div>
          </div>
    </div>
  )
}

export default Home
