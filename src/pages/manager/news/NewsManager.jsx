import { Button } from '@mui/material';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';

const NewsManager = () => {
	return (
		<>
			<header className='pt-3 flex justify-between'>
				<h1 className='text-2xl my-auto'>Noticias</h1>
				<Button color='secondary' variant='contained' disableElevation>
					Nueva noticia
				</Button>
			</header>
			<Search />
			<News />
		</>
	);
};

export default NewsManager;