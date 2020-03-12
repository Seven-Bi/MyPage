import React from 'react';
import img1 from './static/qiuqiu_img/qiuqiu.jpg';
import img2 from './static/qiuqiu_img/qiuqiu1.jpg';
import img3 from './static/qiuqiu_img/qiuqiu2.jpg';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';



class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container maxWidth="lg">
				<Grid   
					container
					spacing={3}
				  	direction="row"
				  	justify="flex-start"
				  	alignItems="center"
			  	>

					<Grid   
						container
						spacing={5}
						xs={3}
					  	direction="column"
					  	alignItems="left"
				  	>
						<h1>Left column bar</h1>
						<h1>Left column bar</h1>
						<h1>Left column bar</h1>
						<h1>Left column bar</h1>
			        </Grid>
					<Grid   
						container
						spacing={5}
						xs={9}
					  	direction="column"
					  	alignItems="center"
				  	>
				  		<Grid container spacing={5}>
					  		<GridList cols={2.5}>
					  			<GridListTile>
					  				<img src={img1}/>
						            <GridListTileBar
						          		title="A"
						            />
				  				</GridListTile>
					  			<GridListTile>
					  				<img src={img2}/>
						            <GridListTileBar
						          		title="B"
						            />
				  				</GridListTile>
					  			<GridListTile>
					  				<img src={img3}/>
						            <GridListTileBar
						          		title="C"
						            />
				  				</GridListTile>
				        	</GridList>
			        	</Grid>
				  		<Grid container spacing={5}>
				  			<paper>
					  			<img src={img3}/>
				  			</paper>
			        	</Grid>
			        </Grid>

				</Grid>
			</Container>
		);
	}
}

export default Loader