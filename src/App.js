import React from 'react';
import './styles/App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Category from './components/category/Category';
import ComingSoon from './components/comingSoon/ComingSoon';
import NewArrival from './components/newArrivals/NewArrival'
import Highlight from './components/highlight/Highlight';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
        <Banner/>
        <Highlight/>
        <NewArrival/>
        <ComingSoon/>
        <Category/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
