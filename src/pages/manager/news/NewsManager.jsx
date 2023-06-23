import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';
import { useNavigate } from 'react-router-dom';
import { NEWS_ADD_MANAGER_PATH, NEWS_MANAGER_PATH } from '../../../utils/PATH';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';


const NewsManager = () => {
	const [dataNews, setDataNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [reLoad, setReLoad] = useState(false);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const doSearch = (search) => {
		setSearchParams({ title: search });
	};

	const navigateNews = (id) => {
		navigate(`${NEWS_MANAGER_PATH}/${id}`);
	};

	const doReLoad = () => {
		setReLoad(!reLoad);
		doSearch('');
	};

	useEffect(() => {
		setLoading(true);
		const searchValue = searchParams.get('title') ?? '';
		const route = searchValue ? `news/?title=${searchValue}` : 'news/';
		API.get(route).then((response) => {
			if (response.status === 200) {
				setDataNews(response.data);
				setLoading(false);
			}
		});
	}, [searchParams, reLoad]);

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
			<Search submitFunc={doSearch} />
			<div className='flex justify-center py-2'>
				{loading ? (
					<Loader color='#6EB500' size='2rem' />
				) : (
					<Button color='secondary' disableElevation onClick={doReLoad}>
						Recargar
					</Button>
				)}
			</div>
			<News dataNews={dataNews} navigateNew={navigateNews} />
		</>
	);
};

export default NewsManager;