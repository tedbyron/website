import React, { useRef } from 'react'
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
}: LayoutProps): JSX.Element => {
  // const [a11yFocused, setA11yFocused] = useState(false)
  const main = useRef(null)

  // const toggleA11yFocus = (): void => {
  //   setA11yFocused(!a11yFocused)
  // }
  // const skipToMain = (): void => {
  //   main.current.focus()
  // }

  return (
    <>
      <Head
        title={title}
        description={description}
        path={path}
        meta={meta}
      />

      {/* TODO: a11y skip to main content */}
      {/* <div className={`notification buttons is-centered is-marginless${a11yFocused ? '' : ' is-sr-only'}`} onFocus={toggleA11yFocus} onBlur={toggleA11yFocus}>
        <button type='button' className='button is-marginless' onClick={skipToMain}>
          Skip to main content
        </button>
      </div> */}

      <Header />
      <main ref={main} role='main' tabIndex={-1} className='flex-grow'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
