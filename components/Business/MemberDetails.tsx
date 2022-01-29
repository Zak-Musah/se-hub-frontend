import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const MemberDetails = () => {
  return (
    <div>
      <img
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        width={160}
        height={160}
      />
      <div>
        <h3>name</h3>
        <h3>Tittle italics</h3>
      </div>
    </div>
  );
};

export default MemberDetails;
