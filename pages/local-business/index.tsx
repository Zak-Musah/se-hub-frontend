import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Business from "../../components/Business/Business";
import GetBusinessDetails from "../../components/Business/GetBusinessDetails";
import { style } from "../../components/Business/helpers";
import { Context } from "../../context";
import styles from "../../styles/localBusiness.module.scss";
import { GetBusinessInfo, BusinessInfo } from "../../types";

export const getStaticProps = async () => {
  const { data }: GetBusinessInfo = await axios.get(
    "http://localhost:8001/api/business-info",
  );
  return {
    props: { businessInfo: data },
  };
};

function LocalBusiness({ businessInfo }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          className={`d-flex flex-row justify-content-between align-items-center  ${styles.main}`}
        >
          <h1>Local Business</h1>
          <div>
            {!user ? "Add your business" : ""}
            <Button
              href="/local-business/add-business"
              className=" rounded"
              type="link"
            >
              {user ? "+ Add your business" : "Sign in"}
            </Button>
          </div>
        </div>

        <div className={`shadow-sm ${styles.filter}`}>
          <p className={` ${styles.filterSmall}`}>Filter By Category:</p>
          {businessInfo &&
            businessInfo.map((business: BusinessInfo) => (
              <>
                <Button
                  type="primary"
                  style={style(selectedTag, business?.category)}
                  className={`${styles.filterBtn}`}
                  onClick={() => setSelectedTag((p) => !p)}
                >
                  {business?.category}
                </Button>
              </>
            ))}

          <Button
            style={style(selectedTag, "IT")}
            type="primary"
            className={`${styles.filterBtn}`}
          >
            IT
          </Button>
        </div>
        <>
          <Business selectedBusiness={businessInfo} />
        </>
        <Modal
          title="Please Provide your business details"
          visible={isModalVisible}
          onOk={() => handleOk()}
          onCancel={() => handleCancel()}
          width={1000}
        >
          <GetBusinessDetails />
        </Modal>
      </div>
    </div>
  );
}

export default LocalBusiness;
