import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUpUser from '../../../components/forms/SignUpUser';
import API from '../../../utils/API';
import FormContainter from '../../../components/containers/FormContainter';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorRegisterUser, errorUser } from '../../../utils/MSG';

const errorMessage = {
	title: 'Fallo en el registro',
	body: 'El Correo ya se encuentra registrado.',
};

const errorGeneralMessage = {
	title: 'Error en el registro',
	body: 'Revisa tu conexión e intenta nuevamente',
};

const UserNew = () => {
	const [openDialogs, setOpenDialogs] = useState({ err: false, errGen: false });
	const navigate = useNavigate();

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

	const handleSubmit = (values) => {
		API.post('user/register/', values)
			.then((response) => {
				if (response.status === 201) {
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
	return (
		<FormContainter>
			<SignUpUser handleSubmit={handleSubmit} admin={true} />
			<div className='pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorRegisterUser} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorUser} />
		</FormContainter>
	);
};

export default UserNew;
