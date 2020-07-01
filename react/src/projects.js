import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
	base_projects: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	text_title: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},
	bg_title: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
	},
}));

export default function Projects() {
	const classes = useStyles();

	return (
		<Card className={classes.base_projects}>
			<div className={classes.text_title}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong>PROJECTS</strong>
	            </Typography>			
			</div>
		</Card>
	);
}