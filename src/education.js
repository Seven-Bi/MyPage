import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
	base_education: {
		marginTop: '2vh',
		marginBottom: '2vh',
		backgroundColor: '#F2F2F2',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
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
	edu_layout: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},
	edu_content: {
		margin: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
	    [theme.breakpoints.down('md')]: {
      		flexDirection: 'column'
	    },
	},
	edu_content_left: {
		margin: theme.spacing(1),
		justifyContent: 'center',
		alignContent: 'center', 
	},
	logo_content: {
		margin: '0.5vh',
		backgroundColor: '#292929',
	},
	edu_info: {
		width: '80vh',
	    [theme.breakpoints.down('md')]: {
      		width: '100%',
	    },
	},
}));

export default function Education() {
	const classes = useStyles();

	const edu_list = [
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/src/static/img/Curtin.png', 
			'title': 'Cutin University', 
			'role': 'Bachelor of Science, Software Engineering', 
			'date': 'August 2014 to December 2018',
		},
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/src/static/img/XiangTan.png', 
			'title': 'XiangTan University', 
			'role': 'Bachelor of Arts, History', 
			'date': 'August 2008 to December 2011', 
		},
	];

	return (
		<Card className={classes.base_education}>
			<div className={classes.text_title}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong>EDUCATION</strong>
	            </Typography>			
			</div>
			<div className={classes.edu_layout}>
				{edu_list.map(item => (
					<div className={classes.edu_content}>
						<Paper className={classes.edu_content_left} elevation={3}>
							<div className={classes.logo_content}>
								<img src={item.img} alt="" width="150" height="150" />
							</div>
						</Paper>
				
						<div>
							<div className={classes.edu_info}>
					            <Typography gutterBottom variant="h6">
									<strong>{item.title}</strong>
					            </Typography>
					            <Typography gutterBottom variant="subtitle2">
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
