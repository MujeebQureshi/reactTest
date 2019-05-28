import React, { Component } from 'react';
import logo from '../../../public/assets/app/media/img/logos/logo-2.png';
import SignInPartial from './SignInPartial';
import SignUpPartial from './SignUpPartial';
import ForgetPasswordPartial from './ForgetPasswordPartial';
//import '../../public/assets/vendors/base/vendors.js';
//import '../../public/assets/demo/default/base/scripts.js';
//import '../../public/assets/snippets/pages/user/login.js';

import $ from 'jquery';
import validate from 'jquery-validation'


class Login extends Component {
  
  constructor(){
	super();
	this.showAlerts = this.showAlerts.bind(this);
	this.submitSignIn = this.submitSignIn.bind(this);
	this.submitSignUp = this.submitSignUp.bind(this);
	this.submitForgetPassword = this.submitForgetPassword.bind(this);
	this.testTimeout = null;
  }	  
  
  componentDidMount() {
  }
  
  showAlerts(qform, type, message){
	  let alertDiv = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
	  qform.find(".alert").remove(), 
	  alertDiv.prependTo(qform); 
	  alertDiv.addClass("fadeIn animated");
	  alertDiv.find("span").html(message);
  }
  
  submitSignIn(e){
	let SignInFormBtn = $("#m_login_signin_submit");
	let SignInForm = $("#m_login_signin_submit").closest("form");
	SignInForm.validate({
		rules: {
			email: {
				required: !0,
				email: !0
			},
			password: {
				required: !0
			}
		}
	})
	if(SignInForm.valid()){
		//alert('form is valid');
		SignInFormBtn.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0)
		this.testTimeout = setTimeout(() => {
			SignInFormBtn.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1);
			//SignInForm.trigger("reset");
			//this.showAlerts(SignInForm,'danger','Some dangerous message');
			this.props.setIsUserLoggedIn('LOGIN');
		}, 2e3);
		
	}
	else{
		//alert('form is invalid');
	}
  }
  
  submitSignUp(e){
	let SignUpFormBtn = $("#m_login_signup_submit");
	let SignUpForm = $("#m_login_signup_submit").closest("form");
	SignUpForm.validate({
		rules: {
			fullname: {
				required: !0
			},
			email: {
				required: !0,
				email: !0
			},
			password: {
				required: !0
			},
			rpassword: {
				required: !0
			},
			agree: {
				required: !0
			}
		}
	})
	if(SignUpForm.valid()){
		//alert('form is valid');
		SignUpFormBtn.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0)
		this.testTimeout = setTimeout(() => {
			SignUpFormBtn.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1);
			SignUpForm.trigger("reset");
			this.showAlerts(SignUpForm,'success','Some success message');
			
		}, 2e3);
		
	}
	else{
		//alert('form is invalid');
	}
  }
  
  componentWillUnmount() {
	//alert('here');
    clearTimeout(this.testTimeout)
}
  
  submitForgetPassword(e){
	let ForgetPasswordFormBtn = $("#m_login_forget_password_submit");
	let ForgetPasswordForm = $("#m_login_forget_password_submit").closest("form");
	ForgetPasswordForm.validate({
		rules: {
			email: {
				required: !0,
				email: !0
			}
		}
	})
	if(ForgetPasswordForm.valid()){
		//alert('form is valid');
		ForgetPasswordFormBtn.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0)
		this.testTimeout = setTimeout(() => {
			ForgetPasswordFormBtn.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1);
			//SignInForm.trigger("reset");
			this.showAlerts(ForgetPasswordForm,'warning','Some warning message');
			
		}, 2e3);
		
	}
	else{
		//alert('form is invalid');
	}
  }
  
  render() {
    return (
	  <div className="m-grid m-grid--hor m-grid--root m-page">
			<div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin" id="m_login">
				<div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
					<div className="m-stack m-stack--hor m-stack--desktop">
						<div className="m-stack__item m-stack__item--fluid">
							<div className="m-login__wrapper">
								<div className="m-login__logo">
									<a href="#">
										<img src={logo} />
									</a>
								</div>
								<SignInPartial submitSignIn={this.submitSignIn}/>
								<SignUpPartial submitSignUp={this.submitSignUp}/>
								<ForgetPasswordPartial submitForgetPassword={this.submitForgetPassword}/>
							</div>
						</div>
						<div className="m-stack__item m-stack__item--center">
							<div className="m-login__account">
								<span className="m-login__account-msg">
									Don't have an account yet ?
								</span>
								&nbsp;&nbsp;
								<a href="javascript:;" id="m_login_signup" className="m-link m-link--focus m-login__account-link">
									Sign Up
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1	m-login__content" style={{backgroundImage: 'url(assets/app/media/img/bg/bg-4.jpg)'}}>
					<div className="m-grid__item m-grid__item--middle">
						<h3 className="m-login__welcome">
							Join Our Community
						</h3>
						<p className="m-login__msg">
							Lorem ipsum dolor sit amet, coectetuer adipiscing
							<br />
							elit sed diam nonummy et nibh euismod
						</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Login;
