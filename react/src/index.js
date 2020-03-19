import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImgLoader from './img_profile.js';
import SideLoader from './side_profile.js';
import ContentLoader from './content_loader.js';
import Header from './page_header.js'
import Footer from './page_footer.js'
import { Grid } from '@material-ui/core';



class MyView extends React.Component {

	render() {
		return (
			<div>
				<Grid
				  container
				  direction="column"
				  justify="flex-start"
				>
					<Header />
					<Grid
					  container
					  direction="row"
					  justify="flex-start"
					  alignItems="stretch"
					>
						<Grid item xs={12} sm={9} alignItems="stretch">
							<div>
								<ImgLoader />
							</div>
							<div>
								<ContentLoader />
							</div>
						</Grid>
						<Grid item xs={12} sm={3} alignItems="stretch">
							<SideLoader />
						</Grid>
					</Grid>
					<Footer />
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
