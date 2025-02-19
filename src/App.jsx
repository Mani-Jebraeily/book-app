import { useState } from 'react'
import {books } from './constants/mockData'
import Layout from './layout/Layout'
import Books from './components/Books'
function App() {

  return (
    <>
    <Layout>
      <Books/>
    </Layout>

    </>
  )
}

export default App
