import React, { Component } from 'react';

class ForgetPasswordPartial extends Component {
  render() {
    return (
      <div className="m-login__forget-password">
		<div className="m-login__head">
			<h3 className="m-login__title">
				Forgotten Password ?
			</h3>
			<div className="m-login__desc">
				Enter your email to reset your password:
			</div>
		</div>
		<form className="m-login__form m-form" action="#">
			<div className="form-group m-form__group">
				<input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autoComplete="off" />
			</div>
			<div className="m-login__form-action">
				<button onClick={(e)=>this.props.submitForgetPassword(e)} id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
					Request
				</button>
				<button id="m_login_forget_password_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
					Cancel
				</button>
			</div>
		</form>
	</div>
    );
  }
}

export default ForgetPasswordPartial;
