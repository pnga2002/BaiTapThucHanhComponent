// rcc 
import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'

export default class BaiTapThuchanh extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <div className="container">
          <Item/>
        </div>
        <Footer/>
      </div>
    )
  }
}
