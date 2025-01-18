import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState('gray');
 
  return (
    
    <div className=' w-screen h-svh' style={{backgroundColor:Color}}>
<div className='w-max h-max flex gap-1  bg-slate-500 p-3 rounded'>

<button  onClick={()=>{setColor("red")}}  className="bg-red-500 w-28 h-10 p-1"> red</button>
<button   onClick={()=>{setColor("yellow")}}  className="bg-yellow-300  w-28 h-10 p-2"> yellow</button>
<button   onClick={()=>{setColor("blue")}}  className="bg-blue-500  w-28 h-10 p-2">blue</button>
<button   onClick={()=>{setColor("pink")}}  className="bg-pink-300  w-28 h-10 p-2">pink</button>
<button   onClick={()=>{setColor("green")}}  className="bg-green-500  w-28 h-10 p-2">green</button>
<button    onClick={()=>{setColor("white")}}  className="bg-slate-300  w-28 h-10 p-2">white</button>
<button    onClick={()=>{setColor("orange")}}  className="bg-orange-500  w-28 h-10 p-2">orange</button>
<button    onClick={()=>{setColor("black")}} className="bg-black w-28 h-10 p-2">black</button>
<button    onClick={()=>{setColor("violet")}} className="bg-violet-500 w-28 h-10 p-2">Violet</button>
<button    onClick={()=>{setColor("gray")}} className="bg-gray-400 w-28 h-10 p-2">gray</button>
<button    onClick={()=>{setColor("teal")}} className="bg-teal-700 w-28 h-10 p-2">Teal</button>
<button    onClick={()=>{setColor("indigo")}} className="bg-indigo-950 w-28 h-10 p-2">Indigo</button>
<button    onClick={()=>{setColor("Olive")}} className="bg-yellow-500 w-28 h-10 p-2">Olive</button>
</div>
   
    
    </div> 
  
  )
}

export default App
