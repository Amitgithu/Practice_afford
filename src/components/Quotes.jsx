import React, { useEffect, useState } from 'react'
import axios  from 'axios';

function Quotes() {
    let [quotes, setQuotes] = useState([]);

    async function fetchQuotes(){
        let result = await axios.get('https://dummyjson.com/quotes');
        console.log(result.data.quotes);
        setQuotes(result.data.quotes);
    }

    useEffect(()=>{
        fetchQuotes();
    },[]);

    function handleClick(){
        console.log("Button Click");
        fetchRecipes();
        console.log("After click");
    }

  return (
    <>
    <h1>All Quotes</h1>
    <button onClick={handleClick}>Fetch Data</button>
    {quotes.map((data)=>{
        return (<div key={data.id} style={{border:'2px solid red', padding:'5px', margin:'8px'}}>
                <h3>Quotes : {data.quote}</h3>
                <p>Author: {data.author}</p>
            </div>
        );
    })}
    </>
  )
}

export default Quotes