import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SignUpUser from '../../components/forms/SignUpUser';
import { SIGN_IN_PATH } from '../../utils/PATH';
import FormContainter from '../../components/containers/FormContainter';
import InfoDialog from '../../components/dialogs/InfoDialog';
import API from '../../utils/API';
import { useState } from 'react';

const successMessage = {
	title: 'Registro exitoso',
	body: 'Ya puedes iniciar sesión.',
};
const errorMessage = {
	title: 'Fallo en el registro',
	body: 'El Correo ya se encuentra registrado.',
};

const errorGeneralMessage = {
	title: 'Error en el inicio de sesión',
	body: 'Revisa tu conexión e intenta nuevamente',
};

const dataUser = {
	name: '',
	last_name: '',
	email: '',
	password: '',
	rol: 1,
	birth_date: '',
};

const SignCustomer = () => {
	const [openDialogs, setOpenDialogs] = useState({ err: false, success: false, errGen: false });
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openSuccess = () => {
		setOpenDialogs({ ...openDialogs, success: true });
	};

	const closeSuccess = () => {
		setOpenDialogs({ ...openDialogs, success: false });
		navigate(SIGN_IN_PATH);
	};

	const openErrGen = () => {
		setOpenDialogs({ ...openDialogs, errGen: true });
	};

	const closeErrGen = () => {
		setOpenDialogs({ ...openDialogs, errGen: false });
	};

	const handleSubmit = (values) => {
		API.post('customer/register/', values)
			.then((response) => {
				if (response.status === 201) {
					openSuccess();
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
			<SignUpUser dataUser={dataUser} handleSubmit={handleSubmit} />
			<div className='flex justify-between pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<Button onClick={() => navigate(SIGN_IN_PATH)}>Iniciar Sesión</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
			<InfoDialog close={closeSuccess} open={openDialogs.success} message={successMessage} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorGeneralMessage} />
		</FormContainter>
	);
};

export default SignCustomer;
