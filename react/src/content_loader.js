import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(150),
			height: theme.spacing(70),
		},
		justifyContent: 'space-around',
	},
}));

const data_list = [
	{
		text: 'Hi this is a test message',
		date: '21-02-2020',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2021',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2022',
	},
];

const nums = data_list.length

export default function SimplePaper() {
	const classes = useStyles();
	let count = 0

	return (
		<div className={classes.root}>
			{
				data_list.map(content => {
					count += 1
					if (count >= nums) {
						const fab_style = {
						    margin: 0,
						    top: 2000,
						    right: 800,
						    position: 'absolute',
						};
						return (
							<Card>
								<CardContent>
									<Typography variant="subtitle1" gutterBottom>
									 	{content.text}
									</Typography>
									<Fab style={fab_style} color="primary" aria-label="add">
										<AddIcon />
									</Fab>
								</CardContent>
							</Card>
						)
					}
					else {
						return (
							<Card>
								<CardContent>
									<Typography variant="subtitle1" gutterBottom>
									 	{content.text}
									</Typography>
								</CardContent>
							</Card>
						)
					}
				})}
		</div>
	);
}