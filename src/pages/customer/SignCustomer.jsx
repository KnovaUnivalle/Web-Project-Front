import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUpUser from '../../components/forms/SignUpUser';
import { SIGN_IN_PATH } from '../../utils/PATH';
import FormContainter from '../../components/containers/FormContainter';
import InfoDialog from '../../components/dialogs/InfoDialog';
import API from '../../utils/API';
import { errorRegisterUser, errorUser } from '../../utils/MSG';

const successMessage = {
	title: 'Registro exitoso',
	body: 'Ya puedes iniciar sesión.',
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
			<SignUpUser handleSubmit={handleSubmit} />
			<div className='flex justify-between pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<Button onClick={() => navigate(SIGN_IN_PATH)}>Iniciar Sesión</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorRegisterUser} />
			<InfoDialog close={closeSuccess} open={openDialogs.success} message={successMessage} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorUser} />
		</FormContainter>
	);
};

export default SignCustomer;
