import React from "react";

function Article(props) {
  
    if(!props.isPublished){
      return null
    }
    else{
      return (
        <div>{props.textContent}</div>
      )
    }
    
 
}

export default Article;
