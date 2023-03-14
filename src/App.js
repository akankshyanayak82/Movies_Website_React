import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Cardgrid from './component/Cardgrid';
import "./App.css";

export default class App extends Component {
  render() {
    return (
     <div className='body'>
     <Header></Header>
     <Cardgrid></Cardgrid>
     <Footer></Footer>
     </div>
    )
  }
}
