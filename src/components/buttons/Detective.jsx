import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../utils/PATH';

const Detective = () => {
	return (
		<Link className='flex flex-row justify-center' to={HOME_PATH}>
			<img className='w-12 p-1' src='/logo.svg' alt='Logo de Detective' />
			<img className='w-20' src='/logo_letter.svg' alt='Detective' />
		</Link>
	);
};

export default Detective;
