import React from 'react';
import ReactDOM from 'react-dom';
import ImgLoader from './img_profile.js';
import SideLoader from './side_profile.js';
import ContentLoader from './content_loader.js';
import Header from './page_nav.js'
import Footer from './page_footer.js'
import { Grid } from '@material-ui/core';
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
			// <div>
			// 	<Grid
			// 	  container
			// 	  direction="column"
			// 	  justify="flex-start"
			// 	  alignItems="stretch"
			// 	>
			// 		<Grid item xs={12}>
			// 			<Header />
			// 		</Grid>
			// 		<Grid
			// 		  container
			// 		  direction="row"
			// 		  justify="flex-start"
			// 		  alignItems="stretch"
			// 		>
			// 			<Grid item xs={12} sm={9}>
			// 				<div>
			// 					<ImgLoader />
			// 				</div>
			// 				<div>
			// 					<ContentLoader />
			// 				</div>
			// 			</Grid>
			// 			<Grid item xs={12} sm={3}>
			// 				<SideLoader />
			// 			</Grid>
			// 		</Grid>
			// 		<Grid item xs={12}>
			// 			<Footer />
			// 		</Grid>
			// 	</Grid>
			// </div>
		);
	}
}


// ========================================

ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
