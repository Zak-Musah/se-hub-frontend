import { NextPage } from "next";
import React from "react";
import styles from "../../styles/businessDetails.module.scss";
import { BusinessInfo, GetBusinessInfo } from "../../types";
import MemberDetails from "../../components/Business/MemberDetails";
import axios from "axios";
import { Button } from "antd";

export const getStaticPaths = async () => {
  const { data }: GetBusinessInfo = await axios.get(
    `http://165.232.126.246/api/business-info`,
  );

  const paths = data.map((business) => {
    return (
      {
        params: { id: business?._id.toString() },
      } || []
    );
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
    `http://165.232.126.246/api/business-info`,
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
    <div className="container d-flex flex-column mt-4">
      {selectedBusiness && (
        <>
          {" "}
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
          <div
            className={`container d-flex justify-space-between  ${styles.team}`}
          >
            {/* <div> */}
            <h1 className={`d-flex ${styles.teamTitle}`}>The TEAM</h1>
            <div className={`container d-flex ${styles.teamMemberDetails}`}>
              {selectedBusiness[0]?.owners && (
                <MemberDetails owners={selectedBusiness[0]?.owners} />
              )}
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
              className={`d-flex flex-column w-50 p-3  lead gap-3 ${styles.detailsContact}`}
            >
              <h3>Contact</h3>
              <span>
                <span className="fw-normal  m-4">Phone: </span>
                <span className="fw-light">{selectedBusiness[0]?.phone}</span>
              </span>
              <span>
                <span className="fw-normal  m-4">Email:</span>
                <span className="fw-light"> {selectedBusiness[0]?.email}</span>
              </span>
              <span>
                <span className="fw-normal  m-4">Website: </span>
                <Button
                  href={selectedBusiness[0]?.website}
                  target="_blank"
                  className="fw-normal"
                  type="link"
                  size={"large"}
                >
                  {selectedBusiness[0]?.website}
                </Button>
              </span>
              <span>
                <span className="fw-normal  m-4">Address: </span>
                <span className="fw-light">
                  {" "}
                  {selectedBusiness[0]?.address}
                </span>
              </span>
            </div>
          </div>
          <div className="container d-fex flex-wrap">
            {selectedBusiness[0] &&
              selectedBusiness[0].artifacts?.map((item) => (
                <>
                  <img
                    className="shadow-sm"
                    style={{
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                    alt="logo"
                    src={item.Location}
                    width={380}
                    height={320}
                  />
                </>
              ))}
          </div>
        </>
      )}
      {!selectedBusiness && <div>not found</div>}
    </div>
  );
};

export default BusinessDetails;
