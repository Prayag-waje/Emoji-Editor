import React from 'react'

function Emoji({emoji, setEmoji}) {

  return (
    <div className='text-4xl bg-white p-3 rounded-2xl cursor-pointer m-2 ' onClick={()=>{
        setEmoji(emoji)
    }}>
        {emoji}
    </div>
  )
}

export default Emoji
