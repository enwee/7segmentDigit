// import {memo} from 'react'

function gradient({style, color1="transparent", color2="transparent", dir=0}) {
  const params = `${dir}deg, ${color1} 0 49%, transparent 49% 51%, ${color2} 51% 100%`
  return (
    <div style={{...style, background: `linear-gradient(${params})`}}/>
  );
}

export const Gradient = gradient;
// export const Gradient = memo(gradient);
