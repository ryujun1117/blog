// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to ="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
    <Layout pageTitle = "Home Page">
      <p>I'm making this by folloing the Gatsby Tutorial.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage