import React from 'react';
import ReactDOM from 'react-dom';
import Base from './page_base.js';



class MyView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div>
				<Base />
			</div>
		);
	}
}


// ========================================

ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
