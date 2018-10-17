import React, { Component } from 'react';
import {
	Route,
	Redirect,	
} from 'react-router-dom'
import {connect} from 'react-redux';
import Storetest from "./Storetest";


class AuthUser extends Component{
  render(){
  	console.log("状态管理state中--"+this.props.userinfo);
    return (       
        this.props.userinfo ?<Route path="/Storetest" component={Storetest}/>:<Redirect to="/home" />             
    )
  }
}

//获取store
const mapStateToProps = (state,ownProps) => {
	return{
		userinfo:state.userinfo
	}	
};
//转发actions
const mapDispatchToProps = dispatch => {	
	return{}
};



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthUser)

