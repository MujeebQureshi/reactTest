import React, { Component } from 'react';
//import '../../public/assets/vendors/base/vendors.bundle.js';
//import '../../public/assets/demo/default/base/scripts.bundle.js';
//import '../../public/assets/app/js/dashboard.js';

import $ from 'jquery';
import validate from 'jquery-validation'

import HeaderPartial from './HeaderPartial';
import SideMenuPartial from './SideMenuPartial';
import FooterPartial from './FooterPartial';
import RightSideBarPartial from './RightSideBarPartial';

class Landing extends Component {
  
  constructor(){
	super();
	this.setIsUserLoggedInEd = this.setIsUserLoggedInEd.bind(this);
  }	  
  
  setIsUserLoggedInEd(){
	this.props.setIsUserLoggedIn('LOGOUT');
  }
  
  componentDidMount(){
	
  }
  
  render() {
    return (
	<div>
      <div className="m-grid m-grid--hor m-grid--root m-page">
			<HeaderPartial setIsUserLoggedInEd={this.setIsUserLoggedInEd} />
			<SideMenuPartial />
			<FooterPartial />
		</div>
		<RightSideBarPartial />
		<div className="m-scroll-top m-scroll-top--skin-top" data-toggle="m-scroll-top" data-scroll-offset="500" data-scroll-speed="300">
			<i className="la la-arrow-up"></i>
		</div>
		{/*<ul className="m-nav-sticky" style={{marginTop: '30px'}}>
			
			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Showcase" data-placement="left">
				<a href="">
					<i className="la la-eye"></i>
				</a>
			</li>
			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Pre-sale Chat" data-placement="left">
				<a href="" >
					<i className="la la-comments-o"></i>
				</a>
			</li>
			
			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
				<a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">
					<i className="la la-cart-arrow-down"></i>
				</a>
			</li>
			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
				<a href="http://keenthemes.com/metronic/documentation.html" target="_blank">
					<i className="la la-code-fork"></i>
				</a>
			</li>
			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
				<a href="http://keenthemes.com/forums/forum/support/metronic5/" target="_blank">
					<i className="la la-life-ring"></i>
				</a>
			</li>
		</ul>*/}
	</div>
    );
  }
}

export default Landing;
