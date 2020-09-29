import React, { Component } from 'react'

const withFormHandler = (initialState) => (BaseComponent) => {
	class WrapperdWithFormHandler extends Component {
		state = initialState;

		handleChange = e => {
			if (e.target.type === "checkbox") {

				this.setState({
					[e.target.name]: e.target.checked
				});
			} else {

				this.setState({
					[e.target.name]: e.target.value
				});
			}
		}

		submit = e => {
			e.preventDefault();
			if (this.props.submit) {
				this.props.submit(this.state);
			}
		};

		render() {
			return <BaseComponent {...this.state} handleChange={this.handleChange} formSubmit={this.submit} {...this.props} />
		}
	}
	return WrapperdWithFormHandler;
}

export default withFormHandler
