import React from "react";
import GetBusinessDetails from "../../../components/Business/GetBusinessDetails";

const index = () => {
  return (
    <div className="container">
      <h1 className=" container jumbotron shadow-sm mt-3 mb-5">
        {" "}
        Add Business Information
      </h1>
      <GetBusinessDetails />
    </div>
  );
};

export default index;
