import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../css/App.css';
import{connect } from 'react-redux'


class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: true}
  }
  //按下按钮触发handleClickOnLikeButton，对state得isLiked进行修改
  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render () {
  	console.log("LikeButton所在的状态管理state中--"+this.props.userinfo);
  	console.log("LikeButton中的state----"+this.state.isLiked)
    const likedText = this.props.likedText
    const unlikedText = this.props.unlikedText
    //判断文本信息，传给父组件
    //确认按钮：将state中的isLiked传递给状态管理的reducer
    return (
    	<div>
      		<button onClick={this.handleClickOnLikeButton.bind(this)}>     			
        		{this.state.isLiked ? likedText : unlikedText}
      		</button>
      	<p id='add' onClick={this.props.change.bind(this,this.state.isLiked)}>Confirm</p>
      	</div>
    )
  }
}

//获取store
const mapStateToProps = state => {
	return{
		userinfo:state.userinfo
	}	
};
//转发actions
const mapDispatchToProps = dispatch => ({
		change:(door)=>{
			dispatch({
				type:'CHANGE',
				payload:door
			})
		},	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikeButton)