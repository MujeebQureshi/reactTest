import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login/Login';
import Landing from './Pages/Landing/Landing';

class App extends Component {
  constructor(){
	super();
	this.state = { 
		isUserLoggedIn: false,
		LoginPageScripts	:	[	'assets/vendors/base/vendors.bundle.js',
								'assets/demo/default/base/scripts.bundle.js',
								'assets/snippets/pages/user/login.js'
								],
		lstLoginPageScripts : [],
		LandingPageScripts : ['assets/vendors/base/vendors.bundle.js',
							  'assets/demo/default/base/scripts.bundle.js',
							  'assets/vendors/custom/fullcalendar/fullcalendar.bundle.js',
							  'assets/app/js/dashboard.js'
							 ],
		lstLandingPageScripts : [],
		areLoginScriptsAdded : false,
		areLandingScriptsAdded : false
	};
	
	this.setIsUserLoggedIn = this.setIsUserLoggedIn.bind(this);
	this.getLoginScripts = this.getLoginScripts.bind(this);
	this.getLandingScripts = this.getLandingScripts.bind(this);
	this.unmountLoginScripts = this.unmountLoginScripts.bind(this);
	this.unmountLandingScripts = this.unmountLandingScripts.bind(this);
	this.mountLoginScripts = this.mountLoginScripts.bind(this);
	this.mountLandingScripts = this.mountLandingScripts.bind(this);
	this.mountScripts = this.mountScripts.bind(this);
	
  }
  
  getLoginScripts(){
	let scripts = this.state.lstLoginPageScripts;
	//console.log(scripts)
	if(scripts.length){
	}
	else{
		scripts = [];
		for(let i=0; i<this.state.LoginPageScripts.length; i++){
			let script = document.createElement("script");
			script.src = this.state.LoginPageScripts[i];
			//script.async = true;
			scripts.push(script);
		}
		this.setState({
			lstLoginPageScripts : scripts
		})
	}
	
	return scripts;
  }
  
  getLandingScripts(){
	let scripts = this.state.lstLandingPageScripts;
	//console.log(scripts)
	if(scripts.length){
	}
	else{
		scripts = [];
		for(let i=0; i<this.state.LandingPageScripts.length; i++){
			let script = document.createElement("script");
			script.src = this.state.LandingPageScripts[i];
			//script.async = true;
			scripts.push(script);
		}
		this.setState({
			lstLandingPageScripts : scripts
		})
	}
	return scripts;
  }
  
  
  mountLoginScripts(){
	let user = localStorage.getItem('test');
	if(user == null){
		let scripts = this.getLoginScripts();
		this.mountScripts(scripts,0,scripts.length,'areLoginScriptsAdded',false);
	}  
  }
  
  mountLandingScripts(){
	let user = localStorage.getItem('test');
	if(user != null){
		let scripts = this.getLandingScripts();
		this.mountScripts(scripts,0,scripts.length,'areLandingScriptsAdded',true);
	}  
  }
  
  mountScripts(scripts,i,count,key,boolUserSignInStatus){
	if(i==count-1){
		//base condition
		document.body.appendChild(scripts[i]); 
		scripts[i].onload = () => {
			this.setState({
				//isUserLoggedIn : boolUserSignInStatus,
				[key] : true
			})
		}
	}
	else if(i<count){
		document.body.appendChild(scripts[i]); 
		scripts[i].onload = () => {
			i++;
			this.mountScripts(scripts,i,count,key,boolUserSignInStatus)
		}
	}  
  }
  
  
  unmountLoginScripts(){
	for(let i=0; i<this.state.lstLoginPageScripts.length; i++){
		ReactDOM.unmountComponentAtNode(this.state.lstLoginPageScripts[i]);
		document.body.removeChild(this.state.lstLoginPageScripts[i]);
	}  
  }
  
  unmountLandingScripts(){
	for(let i=0; i<this.state.lstLandingPageScripts.length; i++){
		ReactDOM.unmountComponentAtNode(this.state.lstLandingPageScripts[i]);
		document.body.removeChild(this.state.lstLandingPageScripts[i]);
	}    
  }
  
  setIsUserLoggedIn(key){
	if(key == 'LOGOUT'){
		localStorage.removeItem('test');
		this.unmountLandingScripts();
		this.mountLoginScripts();
		this.setState({
			isUserLoggedIn: false 
		})
	}
	else if(key == 'LOGIN'){
		localStorage.setItem('test','Hullo');
		this.unmountLoginScripts();
		this.mountLandingScripts();
		this.setState({
			isUserLoggedIn: true 
		})
	}
	window.location.reload();
  }
  
  componentDidUpdate(){
  }
  
  componentDidMount(){
	//localStorage.removeItem('test');
	let user = localStorage.getItem('test');
	if(user == null){
		this.unmountLandingScripts();
		this.mountLoginScripts();
		this.setState({
			isUserLoggedIn: false 
		})
	}
	else{
		this.unmountLoginScripts();
		this.mountLandingScripts();
		this.setState({
			isUserLoggedIn: true 
		})
	}
  }
  
  render() {
	return (
	  (!this.state.isUserLoggedIn)?
      <Login setIsUserLoggedIn ={this.setIsUserLoggedIn} />
	  :
	  <Landing setIsUserLoggedIn ={this.setIsUserLoggedIn} />
    );
  }
}

export default App;
