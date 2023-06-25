import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';
import { useState } from 'react';
import InfoDialog from '../../../components/dialogs/InfoDialog';

const errorMessage = {
	title: 'Fallo en la creación de noticias',
	body: 'Intenta Nuevamente',
};

const NewsAdd = () => {
	const navigate = useNavigate();
	const [openDialogs, setOpenDialogs] = useState({ err: false });

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

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
				openErr();
			});
	};
	return (
		<FormContainter height='h-5/6'>
			<News submitFunc={handleSubmit} title='Nueva Noticia' textButton='Crear' />
			<div className='py-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
		</FormContainter>
	);
};

export default NewsAdd;