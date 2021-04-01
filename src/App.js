import {useState, useEffect} from 'react'
import {Digit} from './components/Digit'

function App() {
  const [state, setState] = useState(0)
  
  useEffect(()=>{
    const id = setInterval(()=>{
      setState(prev=>(prev+1)%100)
    },1000)
    return ()=>clearInterval(id)
  },[])
  
  return (
    <div style={style.container}>
      <div style={style.top}>
        <Digit height={280} digit={Math.floor(state/10)}/>
        <Digit height={280} digit={state%10}/>
      </div>
      <div style={style.btm}>
        <button onClick={()=>setState(prev=>(prev+10)%100)}>+</button>
        <button onClick={()=>setState(prev=>prev<10? prev+90: prev-10)}>-</button>
      </div>
    </div>
  );
}

export default App;

const style = {
  container : {
    display: "flex",
    flexDirection: "column",
  },
  top : {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  btm : {
    display: "flex",
    justifyContent: "center",

  }
}