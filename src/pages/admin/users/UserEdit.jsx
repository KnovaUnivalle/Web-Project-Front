import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUpUser from '../../../components/forms/SignUpUser';
import API from '../../../utils/API';
import FormContainter from '../../../components/containers/FormContainter';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import Loader from '../../../components/tools/Loader';
import { userSchemaUpdate } from '../../../schemas/signUpSchema';
import { compareDataToUpdate } from '../../../utils/AUXILIAR';
import { errorGeneralEdit, errorNotFoundUser } from '../../../utils/MSG';
import AuthDialog from '../../../components/dialogs/AuthDialog';

const UserNew = () => {
	const [dataUser, setDataUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		notFound: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const navigate = useNavigate();
	const { id } = useParams();

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, errGen: false });
	};

	const handleSubmit = (data) => {
		const dataFilter = compareDataToUpdate(data, dataUser);
		API.put(`users/update/${id}/`, dataFilter)
			.then((response) => {
				if (response.status === 200) {
					navigate(-1);
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
		API.get(`users/${id}/`)
			.then((response) => {
				if (response.status === 200) {
					response.data.password = '';
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
		<FormContainter>
			{loading ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<>
					<SignUpUser
						dataUser={dataUser}
						handleSubmit={handleSubmit}
						admin={true}
						textButton='Guardar'
						title='Editar Usuario'
						schema={userSchemaUpdate}
					/>
					<div className='pt-3'>
						<Button onClick={() => navigate(-1)}>Regresar</Button>
					</div>
				</>
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorGeneralEdit} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundUser} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</FormContainter>
	);
};

export default UserNew;
