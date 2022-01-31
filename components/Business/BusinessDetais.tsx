import React from "react";
import styles from "../../styles/businessDetails.module.scss";
import MemberDetails from "./MemberDetails";

const BusinessDetails = ({ title }) => {
  return (
    <div className="container d-flex flex-column">
      <div className={`d-flex ${styles.header}`}>
        <img
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "20px",
          }}
          alt="logo"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width={60}
          height={60}
        />
        <h1 className="">{title}</h1>
      </div>
      <div className={`d-flex justify-space-between  ${styles.team}`}>
        {/* <div> */}
        <h1 className={`d-flex ${styles.teamTitle}`}>The TEAM</h1>
        <div className={`d-flex ${styles.teamMemberDetails}`}>
          <MemberDetails />
          {/* <MemberDetails />

          <MemberDetails />
          <MemberDetails /> */}
        </div>
      </div>
      <div
        className={`container d-flex justify-content-between mt-5  ${styles.details}`}
      >
        <div
          className={`d-flex flex-column w-50 p-3  lead  ${styles.detailsDescription}`}
        >
          <h3>WHAT WE DO</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            dicta debitis, doloremque blanditiis, aperiam quis quod dolor alias
            esse deserunt nesciunt ratione vel illo similique cum, neque
            quisquam corporis totam!
          </div>
        </div>
        <div
          className={`d-flex flex-column w-50 p-3  lead  ${styles.detailsContact}`}
        >
          <h3>Contact</h3>
          <span>
            <small> Phone:</small> {`0000000`}
          </span>
          <span>Email: aallalls@gmailcom</span>
          <span>Website: wwdkkkkkkkkkkkkkkkkkkkkkkkkkklewll</span>
          <span>Address: ddjjdjjjjjjjjjjjjjjjjjjjjjjdjd</span>
        </div>
      </div>
      <div className="container">
        <img
          style={{
            borderRadius: "10px",
            margin: "20px",
          }}
          alt="logo"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width={280}
          height={280}
        />
        <img
          style={{
            borderRadius: "10px",
            margin: "20px",
          }}
          alt="logo"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width={280}
          height={280}
        />
        <img
          style={{
            borderRadius: "10px",
            margin: "20px",
          }}
          alt="logo"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width={280}
          height={280}
        />
        <img
          style={{
            borderRadius: "10px",
            margin: "20px",
          }}
          alt="logo"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width={280}
          height={280}
        />
      </div>
    </div>
  );
};

export default BusinessDetails;
