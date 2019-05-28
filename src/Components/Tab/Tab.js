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
	constructor(props) {
		super(props);
		this.state = {
		  tasks: ''
		}
		this.handleTasks = this.handleTasks.bind(this);
	  }


		// Ekrandaki width'i anlık olarak alıp yükleme ve boyutu değiştirme anında test edip state'i güncelliyor bu sayede style ve diğer işlemler uygulanıyor.
	  handleTasks = () => {
		if (window.innerWidth <= 540) {
			this.setState({
				tasks: true
			});
		} else {
			this.setState({
				tasks: false
			});
		}
	};
	
	  componentDidMount() {
		window.addEventListener("resize", this.handleTasks);
		window.addEventListener("load", this.handleTasks);
	}
	
	  componentWillUnmount() {
		window.removeEventListener("resize", this.handleTasks);
		window.removeEventListener("load", this.handleTasks);
	}

	render() {
		return (
			<Tabs activeKey={this.props.activeTab}
				onSelect={this.props.onSelect}
				onClick={this.props.handleOnLoad} >
				<Tab eventKey="all" title={<span><img src={allImg} alt='All tasks icon'/> {this.state.tasks ? 'Tüm' : 'Tüm Görevler'} </span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDos}
							handleDelete={this.props.handleDelete}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUp}
							handleMoveDown={this.props.handleMoveDown}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClickAdd={this.props.onClickAdd}
                            onClickView={this.props.onClickView}
                            showAdd={this.props.showAdd}
                            showView={this.props.showView}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
							checkWidth={this.state.tasks}
						/>
					</Container>
				</Tab>
				<Tab eventKey="remaining" title={<span><img src={remainingImg} alt='Remaining tasks icon'/> {this.state.tasks ? 'Aktif' : 'Aktif Görevler'} <h4 className="remaining" >{this.props.remaining}</h4></span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDosRemaining}
							handleDelete={this.props.handleDeleteRemaining}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUpRemaining}
							handleMoveDown={this.props.handleMoveDownRemaining}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClickAdd={this.props.onClickAdd}
                            onClickView={this.props.onClickView}
                            showAdd={this.props.showAdd}
                            showView={this.props.showView}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
							checkWidth={this.state.tasks}
						/>
					</Container>
				</Tab>
				<Tab eventKey="completed" title={<span><img src={completedImg} alt='Completed tasks icon'/> {this.state.tasks ? 'Biten' : 'Biten Görevler'} </span>}>
					<Container>
						<ToDoList
							toDos={this.props.toDosCompleted}
							handleDelete={this.props.handleDeleteCompleted}
							handleDone={this.props.handleDone}
							handleMoveUp={this.props.handleMoveUpCompleted}
							handleMoveDown={this.props.handleMoveDownCompleted}
							handleClearCompleted={this.props.handleClearCompleted}
							handleSelectAll={this.props.handleSelectAll}
							onClickAdd={this.props.onClickAdd}
                            onClickView={this.props.onClickView}
                            showAdd={this.props.showAdd}
                            showView={this.props.showView}
							onSubmit={this.props.onSubmit}
							onChange={this.props.onChange}
							value={this.props.value}
							onClose={this.props.onClose}
							onHide={this.props.onHide}
							checkWidth={this.state.tasks}
						/>
					</Container>
				</Tab>
			</Tabs>
		)
	}
}

export default TabSection;