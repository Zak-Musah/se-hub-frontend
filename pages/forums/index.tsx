import React from "react";
import AskQuestion from "../../components/forum/ask-question";
import UploadForum from "../../components/forum/upload-forum";

const Forums = () => {
  return (
    <div>
      <div className="container">
        <AskQuestion/>
      </div>

      <div className="container">
        <UploadForum/>
      </div>
    </div>

       
  );
};

export default Forums;
