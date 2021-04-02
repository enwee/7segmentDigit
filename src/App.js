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
      <h1>Counter</h1>
      <div style={style.counter}>
        <Digit height={210} colorOn="black" colorOff="lightgrey" digit={Math.floor(state/10)}/>
        <Digit height={210} colorOn="silver" digit={state%10}/>
      </div>
      <div style={style.btns}>
        <button style={style.btn} onClick={()=>setState(prev=>(prev+10)%100)}>+</button>
        <button style={style.btn} onClick={()=>setState(prev=>prev<10? prev+90: prev-10)}>-</button>
      </div>
      <h1>Inverted LCD</h1>
      <div style={style.lcd1}>
        {Array(10).fill().map((_, index)=><Digit digit={(index+Math.floor(state/10))%10}/>)}
      </div>
      <h1>LCD</h1>
      <div style={style.lcd2}>
        {Array(10).fill().map((_, index)=><Digit colorOn="black" digit={(index+Math.floor(state/10))%10}/>)}
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
  counter : {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  btns : {
    display: "flex",
    justifyContent: "center",
  },
  btn : {
    fontSize: 30,
    width: 50,
    height: 50
  },
  lcd1 : {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "black",
  },
  lcd2 : {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "silver",
  }
}