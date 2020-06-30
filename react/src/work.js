import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import img1 from './static/img/B.png';




const useStyles = makeStyles((theme) => ({
	base_work: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	logo_card: {
		backgroundColor: '#292929',
	},
	text_content: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'left',
		justifyContent: 'space-evenly',
	},
	work_content: {
		margin: theme.spacing(3),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},	
}));

export default function Work() {
	const classes = useStyles();

	const work_list = [
		{'img': {img1}, 'title': 'EEA', 'role': 'software engineer', 'date': 'July 2019 to October 2019', 'description': ['website development', 'api design', 'mobile app UI']},
	];

	return (
		<Card className={classes.base_work}>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h5">
					<strong>Work</strong>
	            </Typography>			
			</div>
			<div className={classes.text_content}>
				<div className={classes.work_content}>
					<Card className={classes.logo_card}>
						<img src={img1} alt="" width="150" height="150" />
					</Card>

					<div className={classes.text_content}>
			            <Typography gutterBottom variant="h4">
							<strong>EEA</strong>
			            </Typography>
			            <Typography gutterBottom variant="subtitle1">
							Software Engineer
			            </Typography>
			            <Typography gutterBottom variant="subtitle2">
							July 2019 to October 2019
			            </Typography>

			            <Divider variant="middle" />

			            <Typography gutterBottom variant="body1">
							<ul>
								<li>website development</li>
								<li>api design</li>
								<li>mobile app UI</li>
							</ul>
			            </Typography>
		            </div>
				</div>	
			</div>
		</Card>
	);
}