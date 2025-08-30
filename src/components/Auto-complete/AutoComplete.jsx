import React, { useState } from 'react'

const AutoComplete = () => {
    const [input,setInput]=useState("");
    const handleSearch=(e)=>{
        setInput(e.target.value);
    }
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>handleSearch(e)}/>
        <span>{input}</span>
    </div>
  )
}

export default AutoComplete