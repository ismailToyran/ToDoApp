import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import ToDoList from '../ToDoList/ToDoList';

import allImg from './all.png';
import completedImg from './completed.png';
import remainingImg from './remaining.png';

import './Tab.css';

class TabSection extends Component {
  render() {
    return (
			<Tabs activeKey={this.props.activeTab}
						onSelect={this.props.onSelect} >
				<Tab eventKey="all" title={<span><img src={allImg} /> Tüm Görevler </span>}>
					<ToDoList
						toDos={this.props.toDos}
						handleDelete={this.props.handleDelete}
						handleDone={this.props.handleDone}
						handleMoveUp={this.props.handleMoveUp}
						handleMoveDown={this.props.handleMoveDown}
					/>
				</Tab>
				<Tab eventKey="remaining" title={<span><img src={completedImg} /> Aktif Görevler<h4 className="remaining" >{this.props.remaining}</h4></span>}>
					<ToDoList
						toDos={this.props.toDos}
						handleDelete={this.props.handleDelete}
						handleDone={this.props.handleDone}
						handleMoveUp={this.props.handleMoveUp}
						handleMoveDown={this.props.handleMoveDown}
					/>
				</Tab>
				<Tab eventKey="completed" title={<span><img src={remainingImg} /> Biten Görevler </span>}>
					<ToDoList
						toDos={this.props.toDos}
						handleDelete={this.props.handleDelete}
						handleDone={this.props.handleDone}
						handleMoveUp={this.props.handleMoveUp}
						handleMoveDown={this.props.handleMoveDown}
					/>
				</Tab>
			</Tabs>
    )
  }
}

export default TabSection;