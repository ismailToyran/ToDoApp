import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import yenileImg from './yenile.png';

import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="d-flex align-items-center">
        <div className="yenile-img-bg">
          <img src={yenileImg} />
        </div>
        <Breadcrumb>Görev Yönetim Paneli</Breadcrumb>
      </header>
    )
  }
}

export default Header;