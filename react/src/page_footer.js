import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
	base_footer: {
		marginTop: '0',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '100%',
	}
}));


export default function FootBar() {
	const classes = useStyles();

	return (
		<div className={classes.base_footer}>
			<Paper>
				LOL
			</Paper>
		</div>
	);
}