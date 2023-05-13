import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box } from '@mui/material';

const LandingPage = () => {
	return (
		<>
			<div className='h-7 flex justify-center align-middle bg-softlime'>
				<Box>
					<a href='mailto:ceo@knova.com'>
						<MailOutlineIcon style={{ color: 'white' }} />
					</a>
				</Box>
				<p style={{ color: 'white', padding: '2px' }}>Contactanos: ceo@knova.com</p>
			</div>
			<div className='flex flex-col md:flex-row justify-center md:justify-between bg-softgrey'>
				<a className='flex flex-row justify-center p-1 hover:bg-slate-300' href='/'>
					<img className='w-12 p-1' src='./logo.svg' alt='Logo de Food Space' />
					<img className='w-12 pt-2' src='./logo_letter.svg' alt='Logo de Food Space' />
				</a>
			</div>
		</>
	);
};

export default LandingPage;
