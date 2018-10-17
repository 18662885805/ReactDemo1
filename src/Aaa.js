
import React from 'react';
import { Calendar } from 'react-date-range';
import './App.css';


class Aaa extends React.Component {	
	handleSelect(date){
        console.log(date); // Momentjs object
    }
  render () {	
	 return (
    	<div className="Content1">
      	<h1>aaa</h1>
      	<Calendar
            onInit={this.handleSelect}
            onChange={this.handleSelect}
            lang='cn'
        />

      </div>
    )
  }
}
export default Aaa;
