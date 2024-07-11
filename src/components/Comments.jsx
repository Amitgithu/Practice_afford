import React, { useEffect, useState } from 'react'
import axios  from 'axios';


function Comments() {
    let [comment, setComment] = useState([]);

    async function fetchComment(){
        let result = await axios.get('https://dummyjson.com/comments');
        console.log(result.data.comments);
        setComment(result.data.comments);
    }

    useEffect(()=>{
        fetchComment();
    },[]);

    function handleClick(){
        console.log("Button Click");
        fetchRecipes();
    }

  return (
    <>
    <h1>All Comments</h1>
    <button onClick={handleClick}>Fetch Data</button>
    {comment.map((data)=>{
        return (<div key={data.id} style={{border:'2px solid red', padding:'5px', margin:'8px'}}>
                <h3>Body : {data.body}</h3>
                <p>Post ID : {data.postId}</p>
            </div>
        );
    })}
    </>
  )
}

export default Comments