import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from '../components/Hero'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>What's uppppp</h1>
    <Hero />
  </Layout>
)

export default IndexPage
