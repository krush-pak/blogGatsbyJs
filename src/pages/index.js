import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="dawdnw awdhawidhwai a ha ih aih iahai aia aipdadwoad"
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
