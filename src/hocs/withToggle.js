import React, { Component } from 'react'

const withToggle = (BaseComponent) => {
	class WrappedWithToggle extends Component {
		state = {
			isToggled: false
		}
		handleChange = e => this.setState({ isToggled: Boolean(e.target.checked) })

		render() {
			return <BaseComponent {...this.state} toggle={this.handleChange} {...this.props} />
		}
	}
	return WrappedWithToggle;
}

export default withToggle;
