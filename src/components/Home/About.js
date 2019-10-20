import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className="aboutInfo">
          <h4>explore the difference</h4>
          <p>
            lorem dawdowdjwodjaowdmawod adawodkawokdowa kdoakw doawk doakw dokaw
          </p>
          <p>
            dawodkaowda awo jdawodk aow koa a kwao kodak
            okawodkawodkawodkawodkaowkdodwak
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
