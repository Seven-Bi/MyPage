import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import img1 from './static/img/profile_img.JPG';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
	base_top: {
		marginTop: '4vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	text_content: {
		margin: theme.spacing(1.5),
	},
	personal_info: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},	
}));

export default function Top() {
	const classes = useStyles();

	return (
		<Card className={classes.base_top}>
			<Card>
				<img src={img1} alt="" width="250" height="400" />
			</Card>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h3">
					STEVEN BI
	            </Typography>			
			</div>
            
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h5">
					FULL STACK DEVELOPER/SOFTWARE ENGINEER
	            </Typography>			
			</div>

            <Divider variant="middle" />

			<div className={classes.personal_info}>
	            <Typography gutterBottom variant="body1">
					<div className={classes.personal_info}>
						<strong>Location: </strong>
						Perth WA, Australia					
					</div>
					<div className={classes.personal_info}>
						<strong>Github:</strong>
						<a title="Github" href="https://github.com/Seven-Bi">github.com/Seven-Bi</a>
					</div>
					<div className={classes.personal_info}>
						<strong>Mobile:</strong>
						<a title="Mobile Phone" href="tel:0610450980608">(061) 0450980608</a>
					</div>
					<div className={classes.personal_info}>
						<strong>Email:</strong>
						<a title="Send Email" href="mailto:steven.bb.0221@gmail.com">steven.bb.0221@gmail.com</a>
					</div>
	            </Typography>
			</div>

			<Divider variant="middle" />

			<div className={classes.text_content}>
	            <Typography gutterBottom variant="body1">
					Software Engineer with years of programming experiences in coding Python and core Java, passionate about web app development with Django ecosystem and Restful API design.
					Familiar with React, Ajax, Git and Docker.
	            </Typography>		
			</div>
		</Card>
	);
}