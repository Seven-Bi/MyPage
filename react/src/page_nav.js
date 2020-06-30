import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './page_footer.js';
import Top from './top.js';
import Skills from './skills.js';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles(theme => ({
	base_nav: {
		marginTop: '2vh',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '65%',
	},
	paper: {
		backgroundColor: '#87A4FF',
		position: 'fixed',
		top: '0',
		left: '16.7%',
	},
	img_item: {
		alignItems: 'stretch',
	}
}));


export default function HeadBar() {
	const classes = useStyles();
	const [value, setValue] = React.useState();
	const list = [
		{'id': '0', 'template': <Top />},
		{'id': '1', 'template': <Skills />},
		{'id': '2', 'template': <Top />},
		{'id': '3', 'template': <Top />},
		{'id': '4', 'template': <Top />},
		{'id': '5', 'template': <Top />},
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