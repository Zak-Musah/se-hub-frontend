import { Button } from "antd";
import Head from "next/head";
import React, { useContext } from "react";
import { Context } from "../context";
import styles from "../styles/business.module.scss";
function LocalBusiness() {
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="" />
        <meta name="description" content="Local Content" />
        <title> Local Content</title>
      </Head>

      <div className={`${styles.main}`}>
        <div
          className={`d-flex justify-content-between align-items-center px-4 ${styles.main}`}
        >
          <h1>Local Business</h1>
          <div>
            {!user ? "Add your business" : ""}
            <Button className="m-2 rounded" type="primary">
              {user ? "+ Create" : "Sign in"}
            </Button>
          </div>
        </div>
        <div>
          <div className={`${styles.category}`}></div>
          <div className={`${styles.filter}`}>
            <small className={`${styles.filterSmall}`}>Sorting:</small>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Industry
            </Button>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Name
            </Button>
            <Button type="primary" className={`${styles.filterBtn}`}>
              Date added
            </Button>
          </div>
        </div>
        <div className={`${styles.businessContainer}`}>
          <ul className={` ${styles.business}`}>
            <li className={`d-flex ${styles.businessItem}`}>Proto Farms</li>
            <li className={`d-flex ${styles.businessItem}`}>Kente Factory</li>
            <li className={`d-flex ${styles.businessItem}`}>
              Local Sugacane processing
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className={`d-flex ${styles.businessDetails}`}>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            asperiores eum fuga eos quasi. Provident, molestias repudiandae
            quae, corporis hic vel architecto ab quibusdam ullam est esse
            repellat delectus dolorem! Nam dicta consequatur ab numquam iure,
            provident quaerat esse expedita accusamus velit culpa placeat ex
            rerum incidunt! Repellendus nobis beatae at tempora, incidunt natus
            ut ab maxime quos, ad rem! Pariatur ut doloremque aspernatur
            cupiditate, voluptatibus vero! Sint voluptatem et illo molestiae?
            Iure rem expedita eaque ipsam blanditiis eveniet, corporis nisi ad.
            Asperiores atque suscipit totam consectetur corporis corrupti
            commodi! Consequatur autem dignissimos, et accusamus exercitationem
            adipisci est nihil natus, distinctio quo quibusdam ab consectetur.
            Beatae ducimus nulla voluptatum ipsam! Sequi magni, minima id ullam
            quis omnis iure obcaecati commodi. Et, similique ab eos expedita,
            obcaecati omnis voluptas dolore nihil minus deserunt saepe alias
            possimus culpa nesciunt accusamus, est voluptate. Molestiae iure, et
            a illo delectus quia velit provident modi? Quae culpa eum ab
            voluptatibus, laborum enim dolor voluptatum saepe, totam dolore
            blanditiis impedit, rerum consequatur molestiae iste? Facere animi
            illum adipisci. Expedita animi aliquam eum itaque tempora. Corporis,
            laborum. Accusantium, quos. Sapiente veritatis nihil, fugit nulla
            eveniet blanditiis deleniti fuga nesciunt, sit delectus minus velit
            autem aperiam dignissimos explicabo vel aliquam incidunt accusamus
            eum excepturi est architecto aspernatur perferendis! Praesentium
            enim ad accusamus provident possimus, similique ipsum aut quibusdam
            natus itaque placeat iusto libero velit. Est eum, voluptatum quia
            obcaecati blanditiis minus ducimus vitae sed ex, dolorem a autem.
            Exercitationem eum quo id enim inventore! Similique, perferendis
            modi. Voluptates voluptatibus blanditiis esse corrupti. Impedit,
            dicta! Vitae at, eius deleniti magnam provident repellat eveniet
            expedita consectetur ullam, unde, in voluptatem. Possimus fugiat
            ipsam, eligendi deserunt reprehenderit corporis dolore placeat
            numquam debitis quidem et, dolorum amet quos nobis vero ipsa dicta
            odit eum incidunt! Veniam adipisci temporibus sed, fugit eligendi
            culpa. Ut hic ipsum quibusdam totam veniam possimus quas? Provident
            et modi beatae tempore numquam eveniet perspiciatis quia ad nemo est
            iusto totam maxime error ipsa ea nulla, voluptates cum cupiditate!
            Ducimus cupiditate repudiandae dolorum ipsa soluta animi quasi?
            Adipisci fugiat quae nam, placeat eos at distinctio doloremque,
            molestias inventore quia, sint maxime ipsum modi exercitationem
            aperiam repellat sequi debitis iste. Maiores, deleniti nesciunt.
            Repudiandae itaque reprehenderit laboriosam ex explicabo tenetur
            labore aperiam inventore provident quisquam. Reprehenderit sint est
            saepe quod dolorum obcaecati delectus cum suscipit, nulla pariatur,
            magni commodi alias? Veniam similique, nisi nesciunt quam, quisquam
            fuga, qui itaque architecto aperiam possimus voluptatem minus!
            Corporis explicabo cumque quis labore eaque, ratione rem pariatur
            veniam libero maxime beatae animi fugiat ex. Voluptas, sed? Beatae
            perferendis voluptate provident voluptatibus numquam, sapiente
            temporibus, velit unde illo nostrum accusamus debitis dolorum ipsa
            adipisci voluptas repellendus minus assumenda voluptatum placeat,
            tenetur vitae. Voluptate, possimus inventore? Omnis sint voluptate
            amet incidunt cum tempora porro quaerat iste ut distinctio
            doloremque excepturi dicta delectus quas unde corrupti aspernatur,
            commodi consequuntur libero, sed obcaecati tenetur architecto
            mollitia. Molestias, nesciunt! Fugit soluta id illum, ipsam
            explicabo, eius maxime ab ipsum animi culpa commodi illo quisquam
            dolorum quo quis a assumenda repellendus, porro veniam quae
            molestias magni. Fugit soluta reprehenderit ullam? Vel, cupiditate
            quisquam praesentium, autem incidunt esse rerum modi dolorem
            consectetur et maxime fuga debitis qui iusto? Pariatur, perferendis
            cum, assumenda odit unde dicta, minima est architecto corrupti ut
            natus! Fuga, laborum facere? Labore, tempore ut repudiandae adipisci
            voluptatem tempora ipsam fugit minima, omnis nisi harum provident
            ipsa, eos distinctio. Veniam aliquam quis eligendi alias corporis
            asperiores corrupti saepe nostrum? Voluptatibus illo animi corporis
            sapiente reiciendis iste laborum? Consequuntur perspiciatis saepe
            fuga ut fugit veniam inventore ratione, vitae corrupti molestias
            suscipit dolorem deleniti odio, ad veritatis minima. Odio,
            consectetur ab.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalBusiness;
