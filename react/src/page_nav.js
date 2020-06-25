import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './page_footer.js';
import ImgProfile from './img_profile.js';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import img1 from './static/qiuqiu_img/qiuqiu.jpg';
import img2 from './static/qiuqiu_img/qiuqiu1.jpg';
import img3 from './static/qiuqiu_img/qiuqiu2.jpg';
import img4 from './static/qiuqiu_img/qiuqiu3.jpg';
import img5 from './static/qiuqiu_img/qiuqiu4.jpg';
import img6 from './static/qiuqiu_img/qiuqiu5.jpg';
import img7 from './static/qiuqiu_img/qiuqiu6.jpeg';





const useStyles = makeStyles(theme => ({
	base_nav: {
		marginTop: '2vh',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '65%',
	},
	paper: {
		backgroundColor: '#D8D8D8',
		position: 'fixed',
		top: '0',
		left: '17%',
	},
	img_item: {
		alignItems: 'stretch',
	}
}));


export default function HeadBar() {
	const classes = useStyles();
	const [value, setValue] = React.useState();
	const list = [
		{'id': '0', 'template': <ImgProfile />},
		{'id': '1', 'template': <ImgProfile />},
		{'id': '2', 'template': <ImgProfile />},
		{'id': '3', 'template': <ImgProfile />},
		{'id': '4', 'template': <ImgProfile />},
		{'id': '5', 'template': <ImgProfile />},
	];
	const refs = list.reduce((acc, value) => {
		acc[value.id] = React.createRef();
		return acc;
	}, {});

	const handleChange = (event, index) => {
		setValue(index);
		refs[index].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	const handleClick = (event, index) => {};

	return (
		<div className={classes.base_nav}>
			<Paper className={classes.paper}>
				<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
				>
					<Tab label="Top" />
					<Tab label="Skills" />
					<Tab label="Work" />
					<Tab label="Projects" />
					<Tab label="Education" />
					<Tab label="Bottom" />
				</Tabs>
			</Paper>

			<Paper elevation={0}>
				{list.map(item => (
					<Paper key={item.id} ref={refs[item.id]} elevation={0} className={classes.img_item}>
						{item.template}
					</Paper>
				))}
			</Paper>

			<Footer />
		</div>
	);
}