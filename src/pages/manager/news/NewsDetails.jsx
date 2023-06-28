import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import API from '../../../utils/API';
import NewsCard from '../../../components/card/NewsCard';
import Loader from '../../../components/tools/Loader';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import AuthDialog from '../../../components/dialogs/AuthDialog';
import { errorNews, errorNotFoundNews } from '../../../utils/MSG';

const NewsDetails = () => {
	const [dataNew, setDataNew] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		notFound: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const { id } = useParams();
	const navigate = useNavigate();

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: false });
	};

	useEffect(() => {
		API.get(`news/${id}/`)
			.then((response) => {
				if (response.status === 200) {
					setDataNew(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err.response.status === 401) {
					setOpenDialogs({ ...openDialogs, noAuthenticated: true });
				} else if (err.response.status === 403) {
					setOpenDialogs({ ...openDialogs, NoAuthorized: true });
				} else if (err.response.status === 404) {
					setOpenDialogs({ ...openDialogs, notFound: true });
				} else {
					setOpenDialogs({ ...openDialogs, err: true });
				}
				setLoading(false);
			});
	}, []);
	return (
		<div className='flex flex-col justify-center align-middle h-5/6 m-auto'>
			{loading ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<div className='m-auto'>
					<NewsCard dataNew={dataNew} />
					<Button onClick={() => navigate(-1)} sx={{ mt: '0.75rem' }}>
						Regresar
					</Button>
				</div>
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorNews} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundNews} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</div>
	);
};

export default NewsDetails;
