import React from 'react';
import ReactDOM from 'react-dom';
import ImgLoader from './img_profile.js';



class MyView extends React.Component {

	render() {
		return (
			<div>
				<ImgLoader />
			</div>
		);
	}
}


// ========================================

ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
