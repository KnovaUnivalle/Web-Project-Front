import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';
import { useState } from 'react';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorNews } from '../../../utils/MSG';
import AuthDialog from '../../../components/dialogs/AuthDialog';

const NewsAdd = () => {
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const navigate = useNavigate();

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const handleSubmit = (data) => {
		API.post('news/create/', data)
			.then((response) => {
				if (response.status === 201) {
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
	return (
		<FormContainter height='h-5/6'>
			<News submitFunc={handleSubmit} title='Nueva Noticia' textButton='Crear' />
			<div className='py-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorNews} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</FormContainter>
	);
};

export default NewsAdd;
