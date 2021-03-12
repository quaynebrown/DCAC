import React, { Fragment } from 'react'
import GlobalStyle from './GlobalStyles'
import Header from './components/header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Mission from './components/mission/Mission'
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {

  return (
      <Fragment>
        <GlobalStyle />

        {/* HEADER START HERE */}
        <Header />

        {/* MAIN START HERE */}
        <main>
          <AboutUs/>
          <Mission />
          <ContactUs />
        </main>
        {/* MAIN ENDS HERE */}

        {/* FOOTER START HERE */}
        <Footer />
      </Fragment>
  );
}

export default App;
