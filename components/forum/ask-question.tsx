import React from "react";
import { Button } from 'antd';
import UploadForum from "./upload-forum";


const AskQuestion = () => {
  return (
      <div>
        <Button type="primary" shape="round" onClick={uploadForm}> Ask Question </Button>
      </div>
    );
  };
  
  export default AskQuestion;

function uploadForm(){
  return(
    <div className="container">
      <UploadForum/>
    </div>
  )
}
