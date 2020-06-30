import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
	base_footer: {
		marginTop: '0',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '100%',
	},
	text_title: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
}));


export default function FootBar() {
	const classes = useStyles();

	return (
		<div className={classes.base_footer}>
			<Paper>
				<div className={classes.text_title}>
		            <Typography gutterBottom variant="h5">
						<strong>Many Thanks for coming!</strong>
		            </Typography>			
				</div>
			</Paper>
		</div>
	);
}