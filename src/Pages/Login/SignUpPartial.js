import React, { Component } from 'react';

class SignUpPartial extends Component {
  render() {
    return (
      <div className="m-login__signup">
		<div className="m-login__head">
			<h3 className="m-login__title">
				Sign Up
			</h3>
			<div className="m-login__desc">
				Enter your details to create your account:
			</div>
		</div>
		<form className="m-login__form m-form" action="#">
			<div className="form-group m-form__group">
				<input className="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
			</div>
			<div className="form-group m-form__group">
				<input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
			</div>
			<div className="form-group m-form__group">
				<input className="form-control m-input" type="password" placeholder="Password" name="password" />
			</div>
			<div className="form-group m-form__group">
				<input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword" />
			</div>
			<div className="row form-group m-form__group m-login__form-sub">
				<div className="col m--align-left">
					<label className="m-checkbox m-checkbox--focus">
						<input type="checkbox" name="agree" />
						I Agree the
						<a href="#" className="m-link m-link--focus">
							terms and conditions
						</a>
						.
						<span></span>
					</label>
					<span className="m-form__help"></span>
				</div>
			</div>
			<div className="m-login__form-action">
				<button onClick={(e)=>this.props.submitSignUp(e)} id="m_login_signup_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
					Sign Up
				</button>
				<button id="m_login_signup_cancel" className="btn btn-outline-focus  m-btn m-btn--pill m-btn--custom">
					Cancel
				</button>
			</div>
		</form>
	</div>
    );
  }
}

export default SignUpPartial;
