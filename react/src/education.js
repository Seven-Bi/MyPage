import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';




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
	edu_content: {
		margin: theme.spacing(3),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	edu_content_left: {
		margin: theme.spacing(2),
		justifyContent: 'center',
		alignContent: 'center', 
	},
	logo_content: {
		margin: '0.5vh',
		backgroundColor: '#292929',
	},
	edu_title: {
		marginLeft: '25vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center', 
	},
	edu_info: {
		width: '300px',
		textAlign: 'center',
	},
}));

export default function Education() {
	const classes = useStyles();

	const edu_list = [
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/react/src/static/img/Curtin.png', 
			'title': 'Cutin University', 
			'role': 'Bachelor of Science in Software Engineering', 
			'date': 'August 2014 to December 2018', 
		},
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/react/src/static/img/Xiangtan.png', 
			'title': 'XiangTan University', 
			'role': 'Bachelor of Arts in History', 
			'date': 'August 2008 to December 2011', 
		},
	];

	return (
		<Card className={classes.base_projects}>
			<div className={classes.text_title}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong>EDUCATION</strong>
	            </Typography>			
			</div>
			<div className={classes.text_title}>
				{edu_list.map(item => (
					<div className={classes.edu_content}>
						<Paper className={classes.edu_content_left} elevation={3}>
							<div className={classes.logo_content}>
								<img src={item.img} alt="" width="150" height="150" />
							</div>
						</Paper>

						
						<div className={classes.edu_title}>
							<div className={classes.edu_info}>
					            <Typography gutterBottom variant="h5">
									<strong>{item.title}</strong>
					            </Typography>
					            <Typography gutterBottom variant="subtitle1">
									{item.role}
					            </Typography>
					            <Typography gutterBottom variant="subtitle2">
									{item.date}
					            </Typography>
				            </div>
			            </div>
					</div>	
				))}
			</div>
		</Card>
	);
}