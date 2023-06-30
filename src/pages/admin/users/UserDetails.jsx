import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import UserCard from '../../../components/card/UserCard';
import AuthDialog from '../../../components/dialogs/AuthDialog';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorNotFoundUser, errorUsers } from '../../../utils/MSG';

const UserDetails = () => {
	const [dataUser, setDataUser] = useState({});
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
		API.get(`users/${id}/`)
			.then((response) => {
				if (response.status === 200) {
					setDataUser(response.data);
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
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorUsers} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundUser} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</div>
	);
};

export default UserDetails;
