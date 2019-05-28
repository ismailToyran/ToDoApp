import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import objectImg from './object.png';
import gorevImg from './gorev_ikon.png';
import gorevImgHover from './gorev_ikon_hover.png';
import ayarlarImg from './ayarlar_ikon.png';
import ayarlarImgHover from './ayarlar_ikon_hover.png';
import kapatImg from './kapat_ikon.png';

import './SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }

    this.handleClickSettings = this.handleClickSettings.bind(this);
    this.handleClickTasks = this.handleClickTasks.bind(this);
  }

  // Sol taraftaki kırmızı banner ve simgelerin altında ki colorlar için fonksiyonlar
  handleClickSettings() {
    this.setState({isClicked: true});
  }

  handleClickTasks() {
    this.setState({isClicked: false});
  }

  render() {
    const className = this.state.isClicked ? 'settings-active' : 'tasks-active';

    return (
      <div className="side-bar-col align-items-center">

        <div className={className}></div>

        <a href="#profile" id="profile" ><div>
          <Image src={objectImg} className="img-responsive" />
        </div></a>

        <a href="#tasks" id="tasks" className={!this.state.isClicked ? 'h3-white' : 'h3-grey'} onClick={this.handleClickTasks} ><div>
          <h4 className="remaining" >{this.props.remaining}</h4>
          <Image src={this.state.isClicked ? gorevImg : gorevImgHover} className="img-responsive abs-img-center" />
          <h3>Görevler</h3>
        </div></a>

        <a href="#settings" id="settings" className={this.state.isClicked ? 'h3-white' : 'h3-grey'} onClick={this.handleClickSettings} ><div>
          <Image src={this.state.isClicked ? ayarlarImgHover : ayarlarImg} className="img-responsive" />
          <h3>Ayarlar</h3>
        </div></a>

        <a href="#close" id="close" ><div>
          <Image src={kapatImg} className="img-responsive" />
          <h3>Kapat</h3>
        </div></a>

      </div>
    )
  }
}

export default SideBar;