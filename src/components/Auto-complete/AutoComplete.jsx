import React, { useEffect, useState } from "react";
import "./styles.css";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const [results, setResults] = useState([]);

  const fetchData = async () => {

    if(cache[input]){
      console.log("Cache returned: ",input);
      setResults(cache[input]);
      return;
    }

    console.log("API called -", input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    //json.recipes will contain array of recipes
    setResults(json?.recipes);
    //storing cache
    setCache(prev =>({...prev,[input]: json?.recipes}));
  };

  //whenever input changes everytime fetchData will call
  useEffect(() => {
      const timer = setTimeout(fetchData,300)

      return ()=>{
        clearTimeout(timer);
      }
  }, [input]);

  const [showResults, setShowResults] = useState(false);

  //storing cache as object like key-value pair
  const [cache,setCache]= useState({});

  return (
    <div className="full-component">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => handleSearch(e)}
        className="input-box"
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />

      {showResults && results.length > 0 && (
        <div className="result-container">
          {results.map((r) => (
            <span key={r.id} className="result">
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
