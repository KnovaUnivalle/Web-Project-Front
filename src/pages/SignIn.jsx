import { useState } from 'react';
import { Form, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate, Navigate } from 'react-router-dom';
import { signInSchema } from '../schemas/signInSchema';
import InfoDialog from '../components/dialogs/InfoDialog';
import FormikInput from '../components/inputs/FormikInput';
import API from '../utils/API';
import { MODE_ENV, SITE_KEY_ENV } from '../utils/ENV';
import { HOME_PATHS, SIGN_UP_CUSTOMER_PATH } from '../utils/PATH';
import { useAuth } from '../hooks/useAuth';
import FormContainter from '../components/containers/FormContainter';

const errorMessage = {
	title: 'Fallo en el inicio de sesión',
	body: 'Las credenciales no son correctas.',
};

const errorGeneralMessage = {
	title: 'Error en el inicio de sesión',
	body: 'Revisa tu conexión e intenta nuevamente',
};

const SignIn = () => {
	const { token, rol, login } = useAuth();
	if (token) {
		return <Navigate to={HOME_PATHS[rol]} />;
	}
	const navigate = useNavigate();
	const [openDialogs, setOpenDialogs] = useState({ err: false, errGen: false });
	const [stateButton, setActiveButton] = useState(MODE_ENV);

	const successNavigate = (data) => {
		const { access, rol_id } = data;
		login(access, rol_id, navigate(HOME_PATHS[rol_id]));
	};

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

	const activaButton = () => {
		setActiveButton(false);
	};

	const disableButton = () => {
		setActiveButton(true);
	};

	const handleSubmit = (data) => {
		API.post('login/', data)
			.then((response) => {
				if (response.status === 200) {
					successNavigate(response.data);
				}
			})
			.catch((err) => {
				if (err.response && err.response.status === 401) {
					openErr();
				} else {
					openErrGen();
				}
			});
	};

	const onSuccessGoogle = (credentialResponse) => {
		const data = { auth_token: credentialResponse.credential };
		API.post('google/', data)
			.then((response) => {
				if (response.status === 200) {
					successNavigate(response.data);
				}
			})
			.catch((err) => {
				openErrGen();
			});
	};

	return (
		<FormContainter>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
				validationSchema={signInSchema}
			>
				<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
					<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>
						Inicio de sesión
					</h1>
					<FormikInput
						name='email'
						type='email'
						label='Correo Electronico'
						placeholder='Correo Electronico'
					/>
					<FormikInput
						name='password'
						type='password'
						label='Contraseña'
						placeholder='Contraseña'
					/>
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
					<div className='flex flex-col gap-3 py-4 mx-2 md:mx-28 lg:mx-6 xl:mx-20 2xl:mx-28'>
						<Button type='submit' variant='contained' disabled={stateButton} disableElevation>
							Iniciar sesión
						</Button>
						<div className='flex justify-center'>
							<GoogleLogin
								size='medium'
								onSuccess={(credentialResponse) => {
									onSuccessGoogle(credentialResponse);
								}}
							/>
						</div>
					</div>
				</Form>
			</Formik>
			<div className='flex justify-between pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<Button onClick={() => navigate(SIGN_UP_CUSTOMER_PATH)}>Registrarse</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorGeneralMessage} />
		</FormContainter>
	);
};

export default SignIn;
