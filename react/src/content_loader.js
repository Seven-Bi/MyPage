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
			width: theme.spacing(150),
			height: theme.spacing(50),
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
	{
		text: 'Hi this is a test message',
		date: '21-02-2023',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2024',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2025',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2026',
	},
	{
		text: 'Hi this is a test message',
		date: '21-02-2027',
	},
];

export default function SimplePaper() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{
				data_list.map(content => (
					<Card>
						<CardContent>
							<Typography variant="subtitle1" gutterBottom>
							 	{content.text}
							</Typography>
						</CardContent>
					</Card>
			))}
		</div>
	);
}