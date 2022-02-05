import React from "react";

const UploadForum = () => {
    return (
        <form >
         <input type="text" placeholder="Enter your title" required/>
         <textarea placeholder="Enter your description" required  />
         <button>Submit Question</button>
        </form>
    );
  };
  
  export default UploadForum;