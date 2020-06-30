import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
	base_skill: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F0F0F0',
	},
	text_content: {
		margin: theme.spacing(1.5),
	},	
}));

export default function Skills() {
	const classes = useStyles();

	return (
		<Card className={classes.base_skill}>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h3">
					Skills
	            </Typography>			
			</div>
		</Card>
	);
}