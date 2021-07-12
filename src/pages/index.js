import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

import BreakerBanner from '../components/Globals/BreakerBanner/BreakerBanner'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>What's uppppp</h1>
    <BreakerBanner />
  </Layout>
)

export default IndexPage
