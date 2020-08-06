import React from 'react';
import Header from '../../components/Header';

const Layout = ({ children }) => {
  return (
    <section className='Layout'>
      <>
        <Header />
      </>
      <main>
        {children}
      </main>
    </section>
  );
};

export default Layout;
