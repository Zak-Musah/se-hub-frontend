import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
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
        <div className="container  py-5 mt-5">
          <div className="row mt-4 mt-5 py-5">
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
    </div>
  );
};

export default Home;
