import { Avatar, IconButton, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import Detective from '../buttons/Detective';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const socials = [
	{ icon: <FacebookIcon />, name: 'Facebook', ref: 'https://facebook.com/' },
	{ icon: <TwitterIcon />, name: 'Twitter', ref: 'https://twitter.com/' },
	{ icon: <GitHubIcon />, name: 'GitHub', ref: 'https://github.com/KnovaUnivalle' },
	{ icon: <YouTubeIcon />, name: 'Youtube', ref: 'https://www.youtube.com/' },
	{ icon: <InstagramIcon />, name: 'Instagram', ref: 'https://www.instagram.com/' },
];

const LandFooter = () => {
	return (
		<footer id='contact' className='text-center mt-auto'>
			<section className='flex justify-center pt-10 px-4 '>
				<div className='lg:w-1/3'>
					<Detective />
					<p className='font-semibold'>
						Encontramos los mejores precios para que usted no los tenga que buscar.
					</p>
					<div>
						{socials.map((social) => {
							return (
								<IconButton key={`social${social.name}`} style={{ color: 'black' }}>
									<a href={social.ref} target='_blank' rel='noreferrer'>
										<Tooltip title={social.name}>{social.icon}</Tooltip>
									</a>
								</IconButton>
							);
						})}
					</div>
				</div>
			</section>
			<p className=' bg-zinc-200 font-serif'>
				Proyecto para el curso de aplicaciones en la web de la Universidad del Valle
			</p>
		</footer>
	);
};

export default LandFooter;
