import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Oops! I haven&#39;t made this page yet! How did you get here?</p>
  </Layout>
)

export default NotFoundPage
