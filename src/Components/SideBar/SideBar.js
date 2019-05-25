import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import objectImg from './object.png';
import gorevImg from './gorev_ikon.png';
import ayarlarImg from './ayarlar_ikon.png';
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

        <a href="#tasks" id="tasks" className="active" onClick={this.handleClickTasks} ><div>
          <h4 className="remaining" >{this.props.remaining}</h4>
          <Image src={gorevImg} className="img-responsive abs-img-center" />
          <h3>Görevler</h3>
        </div></a>

        <a href="#settings" id="settings" onClick={this.handleClickSettings} ><div>
          <Image src={ayarlarImg} className="img-responsive" />
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