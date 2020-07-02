import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './page_nav.js'
// import Test from './test.js'



const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
		alignContent: 'center',
	},
}));

export default function Base() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Nav />
		</div>
	);
}