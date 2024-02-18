import * as React from "react"
import Layout from "../components/layout"
import "../components/style.css"; 

const NotFoundPage = () => {
  return (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist.</p>
  </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
