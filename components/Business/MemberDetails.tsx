import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const MemberDetails = ({ owners }) => {
  return (
    <>
      {owners &&
        owners.map((owner) => (
          <div>
            <img
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt="example"
              src={owner.avatar.Location}
              width={160}
              height={160}
            />
            <div>
              <h5 style={{ fontSize: "1rem" }}>{owner.Name}</h5>
              <h6>{owner.title}</h6>
            </div>
          </div>
        ))}
    </>
  );
};

export default MemberDetails;
