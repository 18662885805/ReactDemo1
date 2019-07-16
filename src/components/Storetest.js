
import React from 'react';
//import ReactDOM from 'react-dom';
import '../css/App.css';
import{connect } from 'react-redux'

class Storetest extends React.Component {
	
  render () {	
	console.log("this.props:" + this.props.mylist)
    return (
    	<div className="Content3">
      		<h1>storetest</h1>
      	</div>
    )
  }
}

//获取store
const mapStateToProps = (state,ownProps) => {
	return{
		mylist:state.mylist,
		userinfo:state.userinfo
	}
	
};
//转发actions
const mapDispatchToProps = dispatch => ({	
		addItem:(item)=>{
			dispatch({
				type:'ADD_ITEM',
				payload:item
			})
		},
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Storetest)

