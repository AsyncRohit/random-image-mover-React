import React, { useEffect, useRef, useState } from 'react'

const App = () => {


  const imgRef = useRef(null)

  const [xvalue, setXvalue] = useState(0)
  const [yvalue, setYvalue] = useState(0)
  const Move=()=>{
    const x=Math.random()*90
    const y=Math.random()*90
    setXvalue(x)
    setYvalue(y)
  }

  useEffect(function(){
    imgRef.current.style.top=yvalue+'%'
    imgRef.current.style.left=xvalue+'%'
  },[xvalue,yvalue])
  return (
    <div className=' h-screen w-full px-4 relative overflow-hidden' id='coo'>
        <button className='px-4 py-2 bg-white text-black rounded-md absolute top-50 '
        onClick={()=>{
          Move()
        }}>Move</button>
        <img
        ref={imgRef}
        className='h-40 absolute '
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgnid74-e506cf25-aad2-42d7-8a26-2b0739ab66fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NzY4MzkzLWI1ZWYtNGVjZC1iMzljLTZlZjljMTJlZjYxYVwvZGduaWQ3NC1lNTA2Y2YyNS1hYWQyLTQyZDctOGEyNi0yYjA3MzlhYjY2ZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1RWRnD6K0lxv6auiKuh4Xp64SFcqoVlaPYEGTkNo7U" alt="" />

      
    </div>
  )
}

export default App