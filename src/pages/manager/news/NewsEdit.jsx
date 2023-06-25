import { Button } from '@mui/material';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/API';

const NewsEdit = () => {
	const navigate = useNavigate();
	const handleSubmit = (data) => {
		API.post('news/create/', data).then((response) => {
			if (response.status === 201) {
				console.log(response.data);
			}
		});
	};
	return (
		<FormContainter>
			<News submitFunc={handleSubmit} />
			<div className='py-3 mb-20'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
		</FormContainter>
	);
};

export default NewsEdit;