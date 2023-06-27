import { Button } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '../../../components/forms/Search';
import News from '../../../components/tables/News';
import {
	NEWS_ADD_MANAGER_PATH,
	NEWS_EDIT_MANAGER_PATH,
	NEWS_MANAGER_PATH,
} from '../../../utils/PATH';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorNews, errorNotFoundNews } from '../../../utils/MSG';
import AuthDialog from '../../../components/dialogs/AuthDialog';

const NewsManager = () => {
	const [dataNews, setDataNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [reLoad, setReLoad] = useState(false);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		errGen: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
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
		const base = 'news/';
		const route = searchValue ? `${base}?title=${searchValue}` : base;
		API.get(route)
			.then((response) => {
				if (response.status === 200) {
					setDataNews(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err.response.status === 400) {
					setOpenDialogs({ ...openDialogs, err: true });
				} else if (err.response.status === 401) {
					setOpenDialogs({ ...openDialogs, noAuthenticated: true });
				} else if (err.response.status === 403) {
					setOpenDialogs({ ...openDialogs, NoAuthorized: true });
				} else {
					setOpenDialogs({ ...openDialogs, errGen: true });
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
			<News dataNews={dataNews} navigateNews={navigateNews} navigateEdit={navigateEditNews} />
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorNews} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundNews} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</>
	);
};

export default NewsManager;
