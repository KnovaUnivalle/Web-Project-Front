import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import API from '../../../utils/API';
import NewsCard from '../../../components/card/NewsCard';
import Loader from '../../../components/tools/Loader';

const NewsDetails = () => {
	const [dataNew, setDataNew] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		API.get(`news/${id}/`).then((response) => {
			if (response.status === 200) {
				setDataNew(response.data);
				setLoading(false);
			}
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
		</div>
	);
};

export default NewsDetails;
