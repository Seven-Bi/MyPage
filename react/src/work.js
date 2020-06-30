import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import img1 from './static/img/profile_img.JPG';




const useStyles = makeStyles((theme) => ({
	base_work: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	text_content: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	work_content: {
		margin: theme.spacing(3),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},	
}));

export default function Work() {
	const classes = useStyles();

	return (
		<Card className={classes.base_work}>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h5">
					<strong>Work</strong>
	            </Typography>			
			</div>
			<div className={classes.text_content}>
				<div className={classes.work_content}>
					<Card>
						<img src={img1} alt="" width="100" height="100" />
					</Card>

		            <Typography gutterBottom variant="body1">
						asdjkalsjdlaksjdlksajdlksajdlkasjl
		            </Typography>


				</div>
				<div className={classes.work_content}>
					<Card>
						<img src={img1} alt="" width="100" height="100" />
					</Card>

		            <Typography gutterBottom variant="body1">
						asdjkalsjdlaksjdlksajdlksajdlkasjl
		            </Typography>	

				</div>
				<div className={classes.work_content}>
					<Card>
						<img src={img1} alt="" width="100" height="100" />
					</Card>

		            <Typography gutterBottom variant="body1">
						asdjkalsjdlaksjdlksajdlksajdlkasjl
		            </Typography>	

				</div>		
			</div>
		</Card>
	);
}