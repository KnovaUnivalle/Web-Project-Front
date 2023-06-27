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
import { errorGeneralEdit, errorUserEdit } from '../../../utils/MSG';

const UserNew = () => {
	const [dataUser, setDataUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({ err: false, errGen: false });
	const navigate = useNavigate();
	const { id } = useParams();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openErrGen = () => {
		setOpenDialogs({ ...openDialogs, errGen: true });
	};

	const closeErrGen = () => {
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
				if (err.response && err.response.status === 400) {
					openErr();
				} else {
					openErrGen();
				}
			});
	};

	useEffect(() => {
		API.get(`users/${id}/`).then((response) => {
			if (response.status === 200) {
				response.data.password = '';
				setDataUser(response.data);
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
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorUserEdit} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorGeneralEdit} />
		</FormContainter>
	);
};

export default UserNew;
