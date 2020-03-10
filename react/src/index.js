import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './static/qiuqiu_img/qiuqiu.jpg';
import img2 from './static/qiuqiu_img/qiuqiu1.jpg';
import img3 from './static/qiuqiu_img/qiuqiu2.jpg';


class MyView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '仲qiuqiu'
		};
	}

	render() {
		return (
			<div>
				<div>
					<span><h1> {this.state.msg} </h1></span>
				</div>
				<div>
					<img src={img1} />
				</div>			
			</div>
		);
	}
}


// ========================================


ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
