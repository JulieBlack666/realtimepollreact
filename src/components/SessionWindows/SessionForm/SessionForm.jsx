import React,  { Component } from 'react';
import InputWithLable from '../../InputWithLable/InputWithLable';
import { DatePicker } from '../../DatePicker/DatePicker';
import { connect } from 'react-redux';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';
import './styles.css';
import auth0Client from '../../../Auth';

const mapStateToProps = store => {
	return {
		title: store.session.title,
		username: store.session.username,
		start: store.session.start,
		finish: store.session.finish
	};
};

/**
 * Component for session form window
 */
class SessionForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			msg: '',
			isError: false
		};

		this.isValidForm = this.isValidForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	isValidForm() {
		const { title, username, start, finish } = this.props;

		return title !== '' && username !== '' && start <= finish;
	}

	handleSubmit() {
		const { title, username, start, finish } = this.props;

		axios.post('http://localhost:8080/session', {
			title,
			username,
			start,
			finish
		},{
			headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
		}).then(res => {
			setTimeout(() => this.setState({ msg: '' }), 5000);
			this.setState({ msg: res.data, isError: false });
		}).catch((error) => {
			setTimeout(() => this.setState({ msg: '', isError: false }), 5000);
			this.setState({ msg: error.response.data.text || 'Произошла ошибка', isError: true });
		});
	}

	render(){
		return (
			<div className="sessionForm">
				<InputWithLable lable="Название сессии" id='sessionName' />
				<InputWithLable lable="Имя лектора" id='sessionLector' />
				<DatePicker lable="Начало сессии" id="start" />
				<DatePicker lable="Конец сессии" id="finish" />
				<SubmitButton text="Создать новую сессию" isValid={this.isValidForm} handleSubmit={this.handleSubmit} />
				<div className={this.state.isError ? 'msgBox error' : 'msgBox correct'}>
					{this.state.msg}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(SessionForm);
