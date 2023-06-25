import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';
import { useNavigate } from 'react-router-dom';
import {
	NEWS_ADD_MANAGER_PATH,
	NEWS_EDIT_MANAGER_PATH,
	NEWS_MANAGER_PATH,
} from '../../../utils/PATH';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import InfoDialog from '../../../components/dialogs/InfoDialog';

const errorMessage = {
	title: 'Fallo en la carga de noticias',
	body: 'Intenta Nuevamente',
};

const notFoundMessage = {
	title: 'No se han encontrado noticias',
	body: 'Recarga o haz una búsqueda',
};


const NewsManager = () => {
	const [dataNews, setDataNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [reLoad, setReLoad] = useState(false);
	const [openDialogs, setOpenDialogs] = useState({ err: false, notFound: false });
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: true });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: false });
	};


	const doSearch = (search) => {
		setSearchParams({ title: search });
	};

	const navigateNews = (id) => {
		navigate(`${NEWS_MANAGER_PATH}/${id}`);
	};

	const navigateEditNews = (id) => {
		navigate(`${NEWS_EDIT_MANAGER_PATH}/${id}`);
	};

	const doReLoad = () => {
		setReLoad(!reLoad);
		doSearch('');
	};

	useEffect(() => {
		setLoading(true);
		const searchValue = searchParams.get('title') ?? '';
		const route = searchValue ? `news/?title=${searchValue}` : 'news/';
		API.get(route)
			.then((response) => {
				if (response.status === 200) {
					setDataNews(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err.response.status === 404) {
					openNotFound();
				} else {
					openErr();
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
					<Loader size='2rem' />
				) : (
					<Button color='secondary' disableElevation onClick={doReLoad}>
						Recargar
					</Button>
				)}
			</div>
			<News dataNews={dataNews} navigateNew={navigateNews} navigateEdit={navigateEditNews} />
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={notFoundMessage} />
		</>
	);
};

export default NewsManager;