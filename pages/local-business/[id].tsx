import { NextPage } from "next";
import React from "react";
import styles from "../../styles/businessDetails.module.scss";
import { BusinessInfo, GetBusinessInfo } from "../../types";
import MemberDetails from "../../components/Business/MemberDetails";
import axios from "axios";

export const getStaticPaths = async () => {
  const { data }: GetBusinessInfo = await axios.get(
    "http://localhost:8001/api/business-info",
  );

  const paths = data.map((business) => {
    return {
      params: { id: business?._id.toString() },
    };
  });
  return { paths, fallback: false };
};

///how html pages to generate above

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { data }: GetBusinessInfo = await axios.get(
    `http://localhost:8001/api/business-info`,
  );
  let results = data.filter((item) => item._id === params.id);
  return {
    props: { selectedBusiness: results },
  };
};

const BusinessDetails: NextPage<{ selectedBusiness: BusinessInfo[] }> = ({
  selectedBusiness,
}) => {
  return (
    <div className="container d-flex flex-column">
      <div className={`container-fluid d-flex ${styles.header}`}>
        <img
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "20px",
          }}
          alt="logo"
          src={selectedBusiness[0]?.businessLogo?.Location}
          width={60}
          height={60}
        />
        <h1 className="">{selectedBusiness[0]?.name}</h1>
      </div>
      <div className={`container d-flex justify-space-between  ${styles.team}`}>
        {/* <div> */}
        <h1 className={`d-flex ${styles.teamTitle}`}>The TEAM</h1>
        <div className={`container d-flex ${styles.teamMemberDetails}`}>
          <MemberDetails owners={selectedBusiness[0]?.owners} />
        </div>
      </div>
      <div
        className={`container d-flex justify-content-between mt-5  ${styles.details}`}
      >
        <div
          className={`d-flex flex-column w-50 p-3  lead  ${styles.detailsDescription}`}
        >
          <h3>WHAT WE DO</h3>
          <div>{selectedBusiness[0]?.description}</div>
        </div>
        <div
          className={`d-flex flex-column w-50 p-3  lead  ${styles.detailsContact}`}
        >
          <h3>Contact</h3>
          <span>
            <small> Phone:</small> {selectedBusiness[0]?.phone}
          </span>
          <span>Email: {selectedBusiness[0]?.email}</span>
          <span>Website: {selectedBusiness[0]?.website}</span>
          <span>Address: {selectedBusiness[0]?.address}</span>
        </div>
      </div>
      <div className="container">
        {selectedBusiness[0] &&
          selectedBusiness[0].artifacts?.map((item) => (
            <img
              className="shadow-sm"
              style={{
                borderRadius: "10px",
                margin: "20px",
              }}
              alt="logo"
              src={item.Location}
              width={280}
              height={280}
            />
          ))}
      </div>
    </div>
  );
};

export default BusinessDetails;
