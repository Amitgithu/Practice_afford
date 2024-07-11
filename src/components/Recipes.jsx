import React, { useEffect, useState } from 'react'
import axios  from 'axios';

function Recipes() {
    let [recipes, setRecipes] = useState([]);

    async function fetchRecipes(){
        let result = await axios.get('https://dummyjson.com/recipes');
        console.log(result.data.recipes);
        setRecipes(result.data.recipes);
    }

    useEffect(()=>{
        fetchRecipes();
    },[]);

    function handleClick(){
        fetchRecipes();
    }

  return (
    <>
    <h1>All Item Recipes</h1>
    <button onClick={handleClick}>Fetch Data</button>
    {recipes.map((data)=>{
        return (<div key={data.id} style={{border:'2px solid red', padding:'5px', margin:'8px'}}>
                <h3>Name : {data.name}</h3>
                <p>Instructions : {data.instructions}</p>
            </div>
        );
    })}

    </>
  )
}

export default Recipes