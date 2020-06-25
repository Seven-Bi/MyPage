import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
	basefooter: {
		marginTop: '0',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '100%',
	}
}));


export default function FootBar() {
	const classes = useStyles();

	return (
		<div className={classes.basefooter}>
			<Paper>
				LOL
			</Paper>
		</div>
	);
}