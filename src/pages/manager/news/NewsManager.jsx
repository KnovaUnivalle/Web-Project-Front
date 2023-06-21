import { Button } from '@mui/material';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';
import { useNavigate } from 'react-router-dom';
import { NEWS_ADD_MANAGER_PATH } from '../../../utils/PATH';

const NewsManager = () => {
	const navigate = useNavigate();
	return (
		<>
			<header className='pt-3 flex justify-between'>
				<h1 className='text-2xl my-auto'>Noticias</h1>
				<Button
					color='secondary'
					variant='contained'
					disableElevation
					onClick={() => navigate(NEWS_ADD_MANAGER_PATH)}
				>
					Nueva noticia
				</Button>
			</header>
			<Search />
			<News />
		</>
	);
};

export default NewsManager;