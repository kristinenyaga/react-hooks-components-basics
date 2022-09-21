import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article
      textContent="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." 
      isPublished={true}/>
      <Comment  commentText="I agree with this statement. - Angela Merkel"/>
      <Comment  commentText="A universal truth. - Noam Chomsky"/>
      <Comment  commentText="Truth is singular. Its ‘versions’ are mistruths - Sonmi-451"/>
    </div>
  );
}

export default App;
