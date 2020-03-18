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
			width: theme.spacing(100),
			height: theme.spacing(100),
		},
		justifyContent: 'space-around',
	},
}));


export default function SideProfile() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card>
				<CardContent>
					<Typography variant="subtitle1" gutterBottom>
					 	side content
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}