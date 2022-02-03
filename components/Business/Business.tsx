import { NextPage } from "next";
import React from "react";
import { BusinessInfo } from "../../types";
import styles from "../../styles/business.module.scss";
import Link from "next/link";

const Business: NextPage<{ selectedBusiness: BusinessInfo[] }> = ({
  selectedBusiness,
}) => {
  return (
    <div
      className={`"container d-flex justify-content-center align-items-center"`}
    >
      {selectedBusiness &&
        selectedBusiness.map((business) => (
          <div className={`p-3 m-3 rounded-3 shadow ${styles.card}`}>
            <h2 className="fs-3 text-truncate">{business.name}</h2>
            <p className={`h-50 ${styles.truncate} fw-normal fst-italic`}>
              {business.description}
            </p>

            <div className="">
              <Link href={`/local-business/${business._id}`}>
                <a href="#" className="float-start fs-5 fw-bold pe-auto">
                  Details
                </a>
              </Link>
              <img
                style={{
                  borderRadius: "90%",
                  objectFit: "cover",
                  marginRight: "20px",
                }}
                width={40}
                height={40}
                src={business.businessLogo?.Location}
                alt="business-logo"
                className="float-end"
              />
            </div>
          </div>
        ))}

      <div className={`p-3 m-3 rounded-3 shadow ${styles.card}`}>
        <h2 className="fs-3 text-truncate">Team Builder</h2>
        <p className={`h-50 ${styles.truncate} fw-normal fst-italic`}>
          Scans our talent network to create the optimal team for your project
        </p>

        <div>
          <p>
            <a href="#" className="float-start fs-5 fw-bold pe-auto">
              Details
            </a>
          </p>
          <img
            style={{
              borderRadius: "90%",
              objectFit: "cover",
              marginRight: "20px",
            }}
            width={40}
            height={40}
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
            className="float-end"
          />
        </div>
      </div>
      <div className={`p-3 m-3 rounded-3 shadow ${styles.card}`}>
        <h2 className="fs-3 text-truncate">Karma</h2>
        <p className={`h-50 ${styles.truncate} fw-normal fst-italic`}>
          Regularly evaluates our talent to ensure quality and accountabilit
        </p>
        <div>
          <p>
            <a href="#" className="float-start fs-5 fw-bold pe-auto">
              Details
            </a>
          </p>
          <img
            style={{
              borderRadius: "90%",
              objectFit: "cover",
              marginRight: "20px",
            }}
            width={40}
            height={40}
            src="https://assets.codepen.io/2301174/icon-karma.svg"
            alt=""
            className="float-end"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
