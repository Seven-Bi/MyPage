import React from 'react';
import ReactDOM from 'react-dom';
import ImgLoader from './img_profile.js';
import SideLoader from './side_profile.js';
import ContentLoader from './content_loader.js';
import Header from './page_head.js'
import { Grid } from '@material-ui/core';



class MyView extends React.Component {

	render() {
		return (
			<div>
				<Grid
				  container
				  direction="column"
				  justify="flex-start"
				  alignItems="stretch"
				>
					<Header />
				</Grid>
				<Grid
				  container
				  direction="row"
				  justify="flex-start"
				  alignItems="stretch"
				>
					<Grid item xs={12} sm={9}>
						<div>
							<ImgLoader />
						</div>
						<div>
							<ContentLoader />
						</div>
					</Grid>
					<Grid item xs={12} sm={3}>
						<SideLoader />
					</Grid>
				</Grid>
			</div>
		);
	}
}


// ========================================

ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);
