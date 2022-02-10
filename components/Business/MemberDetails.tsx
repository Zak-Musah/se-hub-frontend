import { Card } from "antd";
import { NextPage } from "next";
import React from "react";
import { Owner } from "../../types";

const { Meta } = Card;

const MemberDetails: NextPage<{ owners: Owner[] }> = ({ owners }) => {
  return (
    <>
      {owners &&
        owners.map((owner, idx) => (
          <div
            className="d-flex flex-column text-center align-items-center"
            key={owner.avatar.key}
          >
            <img
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
              key={owner.avatar.key}
              alt="example"
              src={owner.avatar.Location}
              width={160}
              height={160}
            />
            <div className="mt-2">
              <h5 style={{ fontSize: "1rem" }}>{owner.Name}</h5>
              <h6 className="fs-6 fw-light fst-italic">{owner.title}</h6>
            </div>
          </div>
        ))}
    </>
  );
};

export default MemberDetails;
