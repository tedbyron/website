import React from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'
import '../styles/global.scss'

const Layout = props => (
  <>
    <Head
      title={props.title}
      author={props.author}
      description={props.description}
      pathname={props.pathname}
    />
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </>
)

export default Layout
