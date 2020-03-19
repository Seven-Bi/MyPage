import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(169),
			height: theme.spacing(7),
		},
		justifyContent: 'space-around',
	},
}));

export default function FootBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card>
				<CardContent>
					<Typography align="center" variant="subtitle1" gutterBottom>
					 	footer bar
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}