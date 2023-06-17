import { useState } from 'react';
import { Form, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userSchema } from '../../schemas/signUpSchema';
import API from '../../utils/API';
import InfoDialog from '../dialogs/InfoDialog';
import FormikInput from '../inputs/FormikInput';
import { MODE_ENV, SITE_KEY_ENV } from '../../utils/ENV';
import { SIGN_IN_PATH } from '../../utils/PATH';

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

const SignUpUser = ({ rol }) => {
	const [openDialogs, setOpenDialogs] = useState({ err: false, success: false, errGen: false });
	const [stateButton, setActiveButton] = useState(MODE_ENV);
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

	const activaButton = () => {
		setActiveButton(false);
	};

	const disableButton = () => {
		setActiveButton(true);
	};

	const handleSubmit = (values) => {
		API.post('user/register/', values)
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
		<Formik
			initialValues={{
				name: '',
				last_name: '',
				email: '',
				password: '',
				rol: rol,
				birth_date: '',
			}}
			onSubmit={handleSubmit}
			validationSchema={userSchema}
		>
			<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
				<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>
					Registro de usuario
				</h1>
				<FormikInput name='name' type='text' label='Nombre' placeholder='Apellidos' />
				<FormikInput name='last_name' type='text' label='Apellidos' placeholder='Apellidos' />
				<FormikInput
					name='birth_date'
					type='date'
					label='Fecha de Nacimiento'
					placeholder='Fecha de Nacimiento'
				/>
				<FormikInput
					name='email'
					type='email'
					label='Correo Electronico'
					placeholder='Correo Electronico'
				/>
				<FormikInput name='password' type='password' label='Contraseña' placeholder='Contraseña' />
				{MODE_ENV ? (
					<div className='flex justify-center pt-4'>
						<ReCAPTCHA
							sitekey={SITE_KEY_ENV}
							size={'compact'}
							onChange={activaButton}
							onExpired={disableButton}
						/>
					</div>
				) : null}
				<div className='flex justify-center pt-4'>
					<Button type='submit' variant='contained' disableElevation disabled={stateButton}>
						Crear Usuario
					</Button>
				</div>
				<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
				<InfoDialog close={closeSuccess} open={openDialogs.success} message={successMessage} />
				<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorGeneralMessage} />
			</Form>
		</Formik>
	);
};

export default SignUpUser;
