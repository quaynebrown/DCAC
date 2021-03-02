import React, { Fragment } from 'react'
import GlobalStyle from './GlobalStyles'
import Header from './components/header/Header';
import AboutUs from './components/AboutUs/AboutUs'

function App() {

  return (
      <Fragment>
        <GlobalStyle />

        {/* HEADER START HERE */}
        <Header />

        {/* MAIN START HERE */}
        <main>
          <AboutUs/>
        </main>
        {/* MAIN ENDS HERE */}

      </Fragment>
  );
}

export default App;
