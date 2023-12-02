import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import clsx from 'clsx'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx('relative')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;