import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import UserCard from '../../../components/card/UserCard';

const UserDetails = () => {
	const [dataUser, setDataUser] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		API.get(`users/${id}/`).then((response) => {
			if (response.status === 200) {
				setDataUser(response.data);
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
					<UserCard dataUser={dataUser} />
					<Button onClick={() => navigate(-1)} sx={{ mt: '0.75rem' }}>
						Regresar
					</Button>
				</div>
			)}
		</div>
	);
};

export default UserDetails;
