import Head from "next/head";
import React from "react";

function LocalBusiness() {
  return (
    <div className="container se-hub-bg-primary local-business">
      <Head>
        <link rel="stylesheet" href="" />
        <meta name="description" content="Local Content" />
        <title> Local Content</title>
      </Head>

      <div className="row se-hub-bg-primary">
        <div className="col-md-6">
          <img
            className="img-fluid "
            src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
            alt="Grayscale version of kittens in a basket looking around."
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-1">
            <span className="text-decoration-underline">LOCAL BUSINESS</span>
          </h1>
          <h2>
            It is easy to add content from businsss as well as educational
            materials to different target groups
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LocalBusiness;
