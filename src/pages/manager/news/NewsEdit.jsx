import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import { compareDataToUpdate } from '../../../utils/AUX';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';

const NewsEdit = () => {
	const [dataNew, setDataNew] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	const handleSubmit = (data) => {
		const dataFilter = compareDataToUpdate(data, dataNew);
		API.post(`news/update/${id}/`, dataFilter).then((response) => {
			if (response.status === 200) {
				navigate(NEWS_MANAGER_PATH);
			}
		});
	};

	useEffect(() => {
		API.get(`news/${id}/`).then((response) => {
			if (response.status === 200) {
				setDataNew(response.data);
				setLoading(false);
			}
		});
	}, []);

	return (
		<FormContainter>
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
		</FormContainter>
	);
};

export default NewsEdit;