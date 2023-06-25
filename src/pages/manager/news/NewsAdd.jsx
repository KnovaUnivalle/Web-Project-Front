import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';

const NewsAdd = () => {
	const navigate = useNavigate();
	const handleSubmit = (data) => {
		API.post('news/create/', data).then((response) => {
			if (response.status === 201) {
				navigate(NEWS_MANAGER_PATH);
			}
		});
	};
	return (
		<FormContainter>
			<News submitFunc={handleSubmit} title='Nueva Noticia' textButton='Crear' />
			<div className='py-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
		</FormContainter>
	);
};

export default NewsAdd;