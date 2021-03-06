import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSessionLector } from '../../../actions/sessionActions';

const mapDispatchToProps = dispatch => {
	return {
		setSessionLector: name => dispatch(setSessionLector(name))
	};
};

/**
 * Implementation for InputWithLable Fabric for lector input
 */
class SessionLectorInput extends Component {
	render() {
		return(
			<div className="input lectorName">
				<span className="inputName">{this.props.lable}</span>
				<input
					className="inputInline"
					type='text'
					value={this.props.inputValue}
					onChange={value => this.props.setSessionLector(value.target.value)}
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(SessionLectorInput);
