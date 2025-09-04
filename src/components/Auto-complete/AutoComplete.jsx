import React, { useEffect, useState } from "react";
import "./styles.css";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const [results,setResults]= useState([]);

  const fetchData =async()=>{
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    //json.recipes will contain array of recipes
    setResults(json?.recipes);
    console.log(results);
  }

  //whenever input changes everytime fetchData will call
  useEffect(()=>{
    console.log("useffect called");
    fetchData();
  },[input])

  const [resultHidden,setResultHidden]=useState(false);

  return (
    <div className="full-component">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => handleSearch(e)}
        className="input-box"
      />
      <div className="result-container">
        {results.map((r)=> <span key={r.id} className="result">{r.name}</span>)}
      </div>
    </div>
  );
};

export default AutoComplete;
