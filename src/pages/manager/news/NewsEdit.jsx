import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import { compareDataToUpdate } from '../../../utils/AUXILIAR';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorGeneralEdit, errorNotFoundNews } from '../../../utils/MSG';
import AuthDialog from '../../../components/dialogs/AuthDialog';

const NewsEdit = () => {
	const [dataNew, setDataNew] = useState({});
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
		setOpenDialogs({ ...openDialogs, errGen: false });
	};

	const handleSubmit = (data) => {
		const dataFilter = compareDataToUpdate(data, dataNew);
		API.put(`news/update/${id}/`, dataFilter)
			.then((response) => {
				if (response.status === 200) {
					navigate(NEWS_MANAGER_PATH);
				}
			})
			.catch((err) => {
				if (err.response) {
					switch (err.response.status) {
						case 401:
							setOpenDialogs({ ...openDialogs, noAuthenticated: true });
							break;
						case 403:
							setOpenDialogs({ ...openDialogs, NoAuthorized: true });
							break;
						default:
							setOpenDialogs({ ...openDialogs, err: true });
							break;
					}
				} else {
					setOpenDialogs({ ...openDialogs, err: true });
				}
			});
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
				if (err.response) {
					switch (err.response.status) {
						case 401:
							setOpenDialogs({ ...openDialogs, noAuthenticated: true });
							break;
						case 403:
							setOpenDialogs({ ...openDialogs, NoAuthorized: true });
							break;
						case 404:
							setOpenDialogs({ ...openDialogs, notFound: true });
							break;
						default:
							setOpenDialogs({ ...openDialogs, err: true });
							break;
					}
				} else {
					setOpenDialogs({ ...openDialogs, err: true });
				}
				setLoading(false);
			});
	}, []);

	return (
		<FormContainter height='h-5/6'>
			{loading ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<>
					<News
						submitFunc={handleSubmit}
						dataNew={dataNew}
						textButton='Guardar'
						title='Editar Noticia'
					/>
					<div className='py-3'>
						<Button onClick={() => navigate(-1)}>Regresar</Button>
					</div>
				</>
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorGeneralEdit} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundNews} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</FormContainter>
	);
};

export default NewsEdit;
