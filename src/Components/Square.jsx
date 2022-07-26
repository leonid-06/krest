import React from 'react'

const styles = {
    button: {
        width: "100px",
        height: "100px",
        background: "grey", 
        borderRadius: "1px solid black",
        color: "black",
        fontSize: "46px"
    }
}

export default function Square({value, handleClick, i}) {
  return (

    <button className='square' style={styles.button} onClick={()=>handleClick(i)}>
      {value}
    </button>

  )
}
