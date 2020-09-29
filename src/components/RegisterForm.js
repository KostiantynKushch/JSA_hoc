import React, { Component } from "react";
import withToggle from '../hocs/withToggle'
import withFormHandler from '../hocs/withFormHandler'


class RegisterForm extends Component {

	render() {
		const { login, email, password, formSubmit, handleChange, toggle, isToggled } = this.props;
		return (
			<form onSubmit={formSubmit} className="col-md-3" autoComplete="off">
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						value={email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Login</label>
					<input
						name="login"
						value={login}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Password</label>
					<input
						name="password"
						value={password}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-check">
					<input
						checked={isToggled}
						onChange={(e) => {
							handleChange(e);
							toggle(e);
						}}
						type="checkbox"
						name="isAgree"
						id="isAgree"
						className="form-check-input"
					/>
					<label className="form-check-label" htmlFor="isAgree">
						I Agree
          </label>
				</div>

				{isToggled && (
					<div className="form-group">
						<button className="btn btn-success">Register</button>
					</div>
				)}
			</form>
		);
	}
}

export default withFormHandler({
	login: "",
	email: "",
	password: "",
	isAgree: false
})(withToggle(RegisterForm));
