// import {memo} from 'react'

function segment ({style, color = "transparent"}) {
  return (
    <div style={{...style, backgroundColor:color}}/>
  );
}

export const Segment = segment

// export const Segment = memo(segment)