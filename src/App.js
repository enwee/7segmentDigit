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
      <div style={style.counter}>
        <Digit height={280} colorOn="black" colorOff="lightgrey" digit={Math.floor(state/10)}/>
        <Digit height={280} colorOn="silver" digit={state%10}/>
      </div>
      <div style={style.btn}>
        <button onClick={()=>setState(prev=>(prev+10)%100)}>+</button>
        <button onClick={()=>setState(prev=>prev<10? prev+90: prev-10)}>-</button>
      </div>
      <div style={style.lcd1}>
        {Array(10).fill().map((_, index)=><Digit digit={(index+Math.floor(state/10))%10}/>)}
      </div>
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
  btn : {
    display: "flex",
    justifyContent: "center",
    margin: 20
  },
  lcd1 : {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 20
  },
  lcd2 : {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "silver",
    margin: 20
  }
}