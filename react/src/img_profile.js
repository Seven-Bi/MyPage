import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import img1 from './static/qiuqiu_img/qiuqiu.jpg';
import img2 from './static/qiuqiu_img/qiuqiu1.jpg';
import img3 from './static/qiuqiu_img/qiuqiu2.jpg';
import img4 from './static/qiuqiu_img/qiuqiu3.jpg';
import img5 from './static/qiuqiu_img/qiuqiu4.jpg';
import img6 from './static/qiuqiu_img/qiuqiu5.jpg';
import img7 from './static/qiuqiu_img/qiuqiu6.jpeg';


const data = [
	{
		img: img1,
		title: '仲qiuqiu',
	},
	{
		img: img2,
		title: '仲qiuqiu',
	},
	{
		img: img3,
		title: '仲qiuqiu',
	},
	{
		img: img4,
		title: '仲qiuqiu',
	},
	{
		img: img5,
		title: '仲qiuqiu',
	},
	{
		img: img6,
		title: '仲qiuqiu',
	},
	{
		img: img7,
		title: '仲qiuqiu',
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		margin: theme.spacing(1),
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
}));

export default function SingleLineGridList() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList spacing={3} cellHeight={250} className={classes.gridList} cols={2.5}>
				{
					data.map(tile => (
						<GridListTile key={tile.img}>
							<img src={tile.img} />
							<GridListTileBar
								title={tile.title}
								classes={{
									root: classes.titleBar,
									title: tile.title,
								}}
							/>
						</GridListTile>	
					))
				}				
			</GridList>
		</div>
	)
}
