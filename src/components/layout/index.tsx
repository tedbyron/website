import React from 'react'
import type { PropsWithChildren } from 'react'

import Footer from './footer'
import Head from './head'
import type { HeadProps } from './head'
import Header from './header'

type LayoutProps = PropsWithChildren<HeadProps>

const Layout = ({
  title,
  description,
  path,
  meta,
  children
}: LayoutProps): JSX.Element => (
  <>
    <Head
      title={title}
      description={description}
      path={path}
      meta={meta}
    />

    <Header />
    <main role='main' tabIndex={-1} className='outline-none flex-grow'>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
