import React from 'react'
import Header from '../components/header'
import '../components/style.scss'

export default ({ children }) => (
  <>
    <Header/>
    <main className="container is-fluid">
      {children}
    </main>
  </>
)
