import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import yenileImg from './yenile.png';

import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="d-flex align-items-center">
        <div className="yenile-img-bg">
          <a href="#refresh"><img src={yenileImg} alt='Refresh icon' /></a>
        </div>
        <a href="#tasks-panel"><Breadcrumb>Görev Yönetim Paneli</Breadcrumb></a>
      </header>
    )
  }
}

export default Header;