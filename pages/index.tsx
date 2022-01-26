import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BussinessImage from "../public/images/business.jpg";
import CoachingImage from "../public/images/coaching.jpg";
import Forum from "../public/images/forum.jpg";
import EduMaterials from "../public/images/eduMaterials.png";
import Forums from "./forums";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SE Hub</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <div className="container  py-5">
          <div className="row mt-4 ml-n2 py-5">
            <div className="col-lg-7 pt-5 text-center">
              <h1 className="pt-5">
                Information Hub for Formal and Informal Business and
                Institutions
              </h1>
              <button className={styles.btnInfo}> Get In Touch </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.new}>
        <div className="container py-5">
          <div className="row pt-5  ">
            <div className="col-lg-7">
              <div className="row text-center">
                <div className="col-lg-3">
                  <Image
                    className="image-fluid"
                    width={240}
                    height={240}
                    src={Forum}
                    alt="Forums Image"
                  ></Image>
                  <h6>Forums</h6>
                </div>
                <div className="col-lg-3">
                  <Image
                    className="image-fluid"
                    width={240}
                    height={240}
                    src={CoachingImage}
                    alt="Bussiness Image"
                  ></Image>
                </div>
                <div className="col-lg-3">
                  <Image
                    className="image-fluid"
                    width={240}
                    height={240}
                    src={EduMaterials}
                    alt="Bussiness Image"
                  ></Image>
                </div>
                <div className="col-lg-3">
                  <Image
                    className="image-fluid"
                    width={240}
                    height={240}
                    src={BussinessImage}
                    alt="Bussiness Image"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
