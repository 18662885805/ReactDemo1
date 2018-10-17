import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
	NavLink,
	Switch
	
} from 'react-router-dom'
import Storetest from "./Storetest";
import Aaa from "./Aaa";
import AuthUser from './AuthUser'
import LikeButton from './LikeButton'
import logo from './logo.svg';
import './App.css';


class Home extends Component {
  render () {
    return (
    	<div className="Content">
      	<h1>home</h1>
      </div>
    )
  }
}



class Bbb extends Component {
  render () {
    return (
    	<div className="Content2">
      	<h1>bbb</h1>
      </div>
    )
  }
}



class Title extends Component {
  render () {
    return (
    	<div className="Title">
      	<h1>HEADER</h1>
      </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    	<div className="Footer">
      	<h1>FOOTER</h1>
      </div>
    )
  }
}

class Nav extends Component {
  render () {
    return (
    <div className="Nav">
      <ul>
      	<li><NavLink to='/home' activeClassName="active" >home</NavLink></li>
      	<li><NavLink to='/aaa' activeClassName="active" >aaa</NavLink></li>
      	<li><NavLink to='/bbb' activeClassName="active" >路由守卫</NavLink></li>
      	<li><NavLink to='/storetest' activeClassName="active" >storetest</NavLink></li>
      </ul>      
    </div>
    )
  }
}


class App extends Component {
  render() {
    return (
	<BrowserRouter>
      <div className="App">
      	<Title />
      	<Nav />
        <header className="App-header">
         
          <h1 className="App-title">React测试项目</h1>
        </header>
        <p className="App-intro">
          威廉欧奈尔信息科技(上海)有限公司
        </p>
        <div className="Zan">
        	<LikeButton likedText='路由允许' unlikedText='路由禁止' />
      	</div> 
     	<Switch>
      		<Route path='/home' component={Home}/>
      		<Route path='/aaa' component={Aaa}/>
      		<AuthUser path='/bbb' component={Bbb}/>
    		<Route path='/storetest' component={Storetest}/> 
    	</Switch>
    	<Footer />
      </div>
    </BrowserRouter> 
    );
  }
}



export default App;


