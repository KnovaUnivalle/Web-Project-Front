import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandMenu = ({ pages }) => {
	const navigate = useNavigate();
	return (
		<div className='hidden md:block'>
			{pages.map((page) => (
				<Button
					key={`menulanditem${page.id}`}
					onClick={() => navigate(page.id)}
					sx={{ color: '#000', paddingTop: '0.75rem' }}
				>
					<p className='font-semibold font-sans text-base lg:text-lg'>{page.title}</p>
				</Button>
			))}
		</div>
	);
};

export default LandMenu;
