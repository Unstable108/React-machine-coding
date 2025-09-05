If json is null or undefined, the expression json?.recipes will return undefined instead of throwing a runtime error.This is particularly useful when dealing with data that might not be fully loaded or structured as expected, preventing potential errors when trying to access properties on a non-existent object.

------------------------------
-> i added my input box
-> i call the api
-> wrote the logic of fetching the result api using useEffect
-> showing the result

-------------
i added results.length > 0
when there is no result, no box will come
-----------------
feature enchancements
show and blur
now, events
onfocus, onblur
const [showResults, setShowResults] = useState(false);
onFocus={()=>setShowResults(true)}
onBlur={()=>setShowResults(false)}

-----------
improve the performance
debouncing

useEffect(() => {
      console.log("useffect called");
      fetchData();
  }, [input]);

to
const timer =  setTimeout(fetchData,300)
if we now type, it will fetch the data after 300mili second

in react useeffect when we use return fuction
useEffect(()=>{}

 return ()=>{} //this fucntion or component will be called when the component unmounted
,[])

useEffect(() => {
      const timer = setTimeout(fetchData,300)

      return ()=>{
        clearTimeout(timer);
      }
  }, [input]);

so in between 300ms, if input chnages the function will not be called

--------------

another optimization

cache the results
the result showed be cached, if the result for the keyword is already there
suppose we type mango lassi, it would call for mango then mango lassi, but if we remove lassi, 
it will again called for mango which not needed

to implement cache

we will store chache as object think like key-value pair
({mango,[results of mango]},{banaa,[result of that]})

//storing cache as object like key-value pair
const [cache,setCache]= useState({});
setCache(prev =>({...prev,[input]: json?.recipes}));

if the result of input is availabe in cache
if(cache[input]){
      setResults(cache[input]);
      return;
    }
no need to call api, direct return
