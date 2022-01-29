import { Button } from "antd";
import Head from "next/head";
import React, { useContext, useState } from "react";
import BusinessDetails from "../components/Business/BusinessDetais";
import { Context } from "../context";
import styles from "../styles/business.module.scss";
function LocalBusiness() {
  const [businessName, setBusinessName] = useState("Proto-farms");
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const getShowBusinessDetails = (item: string) => {
    setBusinessName(item);
  };

  return (
    <div className="container ">
      <Head>
        <link rel="stylesheet" href="" />
        <meta name="description" content="Local Content" />
        <title> Local Content</title>
      </Head>

      <div className={`${styles.main}`}>
        <div
          className={`d-flex justify-content-between align-items-center px-4 ${styles.main}`}
        >
          <h1>Local Business</h1>
          <div>
            {!user ? "Add your business" : ""}
            <Button className="m-2 rounded" type="primary">
              {user ? "+ Create" : "Sign in"}
            </Button>
          </div>
        </div>
        <div>
          <div className={`${styles.category}`}></div>
          <div className={`${styles.filter}`}>
            <small className={`${styles.filterSmall}`}>Sorting:</small>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Industry
            </Button>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Name
            </Button>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Date added
            </Button>
          </div>
        </div>
        <div className={`${styles.businessContainer}`}>
          <ul className={` ${styles.business}`}>
            <li
              className={`d-flex ${styles.businessItem}`}
              onClick={() => getShowBusinessDetails("Proto-farms")}
              key={"proto"}
            >
              Proto Farms
            </li>
            <li
              className={`d-flex ${styles.businessItem}`}
              onClick={() => getShowBusinessDetails(" Kente Factory")}
              key={"kente"}
            >
              Kente Factory
            </li>
            <li
              className={`d-flex ${styles.businessItem}`}
              onClick={() =>
                getShowBusinessDetails("Local Sugacane processing")
              }
              key={"sugar"}
            >
              Local Sugacane processing
            </li>
          </ul>
          <div className={`d-flex ${styles.businessDetails}`}>
            <BusinessDetails title={businessName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalBusiness;
