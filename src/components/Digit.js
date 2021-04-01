import {memo} from "react"
import {Segment} from "./Segment"
import {Gradient} from "./Gradient"

const truthTable = [
    [1,1,1,1,1,1,0],
    [0,1,1,0,0,0,0],
    [1,1,0,1,1,0,1],
    [1,1,1,1,0,0,1],
    [0,1,1,0,0,1,1],
    [1,0,1,1,0,1,1],
    [1,0,1,1,1,1,1],
    [1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1],
]

const digit = ({digit = 0, height=100, colorOn = "lightgrey", colorOff = "transparent"}) => {
  const width = 5/7*height
  const margin = width/10
  const color = truthTable[digit].map(seg=>seg?colorOn:colorOff)
  const mod = digit === 2 && 270

  return(
    <div style={{...style.container, height, width, margin}}>
      <div style={style.seg5412}>
        <Gradient style={style.flex1} color1={color[5]} color2={color[0]} dir={45}/>
        <Segment style={style.flex2} color={color[5]}/>
        <Gradient style={style.flex1} color1={color[4]} color2={color[5]} dir={45+mod}/>
        <Segment style={style.flex2} color={color[4]}/>
        <Gradient style={style.flex1} color1={color[4]} color2={color[3]} dir={135}/>
      </div>
      <div style={style.seg063}>
        <Segment style={style.flex1} color={color[0]}/>
        <div style={style.flex2}/>
        <Segment style={style.flex1} color={color[6]}/>
        <div style={style.flex2}/>
        <Segment style={style.flex1} color={color[3]}/>
      </div>
      <div style={style.seg5412}>
        <Gradient style={style.flex1} color1={color[0]} color2={color[1]} dir={135}/>
        <Segment style={style.flex2} color={color[1]}/>
        <Gradient style={style.flex1} color1={color[2]} color2={color[1]} dir={45+mod}/>
        <Segment style={style.flex2} color={color[2]}/>
        <Gradient style={style.flex1} color1={color[3]} color2={color[2]} dir={45}/>
      </div>
    </div>
  )
}

export const Digit = memo(digit)

const style = {
    container:{
        display: "flex",
        flexDirection: "row",
    },
    seg5412:{
        display: "flex",
        flexDirection: "column",
        flex: 1
    },
    seg063:{
        display: "flex",
        flexDirection: "column",
        flex: 3
    },
    flex1:{
        flex: 1
    },
    flex2:{
        flex: 2
    },
}