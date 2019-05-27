import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import ToDoList from '../ToDoList/ToDoList';

import allImg from './all.png';
import completedImg from './completed.png';
import remainingImg from './remaining.png';

import './Tab.css';

class TabSection extends Component {
	render() {
		return (
			<Tabs activeKey={this.props.activeTab}
				onSelect={this.props.onSelect}
				onClick={this.props.handleOnLoad} >
				<Tab eventKey="all" title={<span><img src={allImg} /> Tüm Görevler </span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDos}
							handleDelete={this.props.handleDelete}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUp}
							handleMoveDown={this.props.handleMoveDown}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClick={this.props.onClick}
							show={this.props.show}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
						/>
					</Container>
				</Tab>
				<Tab eventKey="remaining" title={<span><img src={remainingImg} /> Aktif Görevler<h4 className="remaining" >{this.props.remaining}</h4></span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDosRemaining}
							handleDelete={this.props.handleDeleteRemaining}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUpRemaining}
							handleMoveDown={this.props.handleMoveDownRemaining}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClick={this.props.onClick}
							show={this.props.show}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
						/>
					</Container>
				</Tab>
				<Tab eventKey="completed" title={<span><img src={completedImg} /> Biten Görevler </span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDosCompleted}
							handleDelete={this.props.handleDeleteCompleted}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUpCompleted}
							handleMoveDown={this.props.handleMoveDownCompleted}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClick={this.props.onClick}
							show={this.props.show}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
						/>
					</Container>
				</Tab>
			</Tabs>
		)
	}
}

export default TabSection;