import React from 'react'
import ErrorBoundary from '../ErrorBoundary'
import Layout from '../Layout'
import Home from 'pages/Home'

const Root = () => (
  <ErrorBoundary>
    <Layout>
      <Home />
    </Layout>
  </ErrorBoundary>
)
export default Root
