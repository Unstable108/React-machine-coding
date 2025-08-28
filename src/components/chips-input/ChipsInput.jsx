import React, { useState } from 'react';
import './styles.css'

function ChipsInput() {
  const [inputText, setIntputText] = useState("");
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !=="") {
      //logic to add new chips
      setChips(prev => [...prev, inputText]);
      setIntputText("")
    }
    
  }
  const handleDeleteChip = (index) => {
    //react only changes UI when refence value change 
    const copyArr = [...chips];
    copyArr.splice(index, 1);
    setChips(copyArr);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setIntputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div class="chips">
        {chips.map((chip,index) => <div class='chip'>{chip} <button onClick={()=>handleDeleteChip(index)} class='button'>X</button> </div>)}
      </div>
    </div>
  );
}

export default ChipsInput;