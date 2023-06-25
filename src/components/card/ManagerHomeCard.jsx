import { Button } from '@mui/material';

const ManagerHomeCard = ({ title, text, navigate }) => {
	return (
		<div className='border-x border-t shadow-md p-2 w-full md:p-4 md:w-1/3'>
			<h2 className='text-xl font-bold font-serif lg:text-2xl '>{title}</h2>
			<p className='h-20'>{text}</p>
			<div className='flex justify-end pr-2 pt-2'>
				<Button onClick={navigate}>
					<p className='text-lg font-semibold '>Accede Aquí</p>
				</Button>
			</div>
		</div>
	);
};

export default ManagerHomeCard;