import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
// import img1 from './static/img/A.jpg';
import img2 from './static/img/B.png';
import img3 from './static/img/C.bmp';




const useStyles = makeStyles((theme) => ({
	base_work: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	logo_content: {
		margin: '0.5vh',
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
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/react/src/static/img/A.jpg', 
			'title': 'South Pacific', 'role': 'ICT Developer', 
			'date': 'February 2020 to June 2020', 
			'description': ['Website development & maintain', 'Marketing email system development', 'UI design']},
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/react/src/static/img/B.png', 
			'title': 'EEA', 
			'role': 'Software Engineer', 
			'date': 'July 2019 to October 2019', 
			'description': ['Full stack development', 'API design']},
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/react/src/static/img/C.bmp', 
			'title': 'PinYi', 
			'role': 'Software Engineer', 
			'date': 'September 2012 to July 2013', 
			'description': ['system maintain & assist new feature development', 'website maintain']},
	];

	return (
		<Card className={classes.base_work}>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h5">
					<strong>Work</strong>
	            </Typography>			
			</div>
			<div className={classes.text_content}>
				{work_list.map(item => (
					<div className={classes.work_content}>
						<Paper elevation={3}>
							<div className={classes.logo_content}>
								<img src={item.img} alt="" width="150" height="150" />
							</div>
						</Paper>

						<div className={classes.text_content}>
				            <Typography gutterBottom variant="h5">
								<strong>{item.title}</strong>
				            </Typography>
				            <Typography gutterBottom variant="subtitle1">
								{item.role}
				            </Typography>
				            <Typography gutterBottom variant="subtitle2">
								{item.date}
				            </Typography>

				            <Divider variant="middle" />

				            <Typography gutterBottom variant="body1">
								<ul>
								{item.description.map(sub_item => (
									<li>
										{sub_item}
									</li>
								))}
								</ul>
				            </Typography>
			            </div>
					</div>	
				))}
			</div>
		</Card>
	);
}