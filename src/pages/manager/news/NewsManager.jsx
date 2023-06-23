import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';
import { useNavigate } from 'react-router-dom';
import { NEWS_ADD_MANAGER_PATH, NEWS_MANAGER_PATH } from '../../../utils/PATH';
import API from '../../../utils/API';


const NewsManager = () => {
	const [dataNews, setDataNews] = useState([]);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const doSearch = (search) => {
		setSearchParams({ q: search });
	};

	const navigateNews = (id) => {
		navigate(`${NEWS_MANAGER_PATH}/${id}`);
	};

	useEffect(() => {
		const searchValue = searchParams.get('q') ?? '';
		const route = searchValue ? `news/?q=${searchValue}` : 'news/';
		API.get('news/').then((response) => {
			if (response.status === 200) {
				setDataNews(response.data);
			}
		});
	}, [searchParams]);

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
			<Search funcSubmit={doSearch} />
			<News dataNews={dataNews} navigateNew={navigateNews} />
		</>
	);
};

export default NewsManager;