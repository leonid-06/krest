import React from 'react'
import Square from './Square'
import { useState } from 'react'

import whoIsWin from "./whoIsWin";

export default function Bord() {

    const [numbers, setNumbers] = useState(Array(9).fill(null))
    const [flag, setFlag] = useState(true)

    function handleClick(i){

        
        if (whoIsWin(numbers) || numbers[i]) {
            return
        }

        let tempArray = [...numbers]

        console.log(i)
        setFlag(!flag)
        console.log(flag)

        tempArray[i] = flag ? "X":"O"

        setNumbers(tempArray)
    }

    function clear_field(){
        setNumbers(Array(9).fill(null))
    }

  return (

    <>
        <select name="user_profile_color_1">
            <option value="1">Андрлехт</option>
            <option value="2">Буча</option>
            <option value="3">Стоматолог</option>
            <option value="4">Борщ</option>
        </select>
        <span>ПИДОР</span>

        <div className='bord'>
            {
                numbers.map((el, index)=>{
                    return <Square key={index} i={index} value={el} handleClick={handleClick}/>
                })
            }
        </div> 
        <button onClick={clear_field} >Clear played field</button>
        От создателей PornHub
    </>


  )
}
