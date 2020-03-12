import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './profile_loader.js';



class MyView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '仲qiuqiu - - !'
		};
	}

	render() {
		return (
			<div>
				<Loader />
			</div>
		);
	}
}


// ========================================


ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
