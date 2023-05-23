import { useState } from 'react';
import { Form, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInSchema } from '../schemas/signInSchema';
import API from '../utils/API';
import InfoDialog from '../components/dialogs/InfoDialog';
import FormikInput from '../components/inputs/FormikInput';

const errorMessage = {
	title: 'Fallo en el inicio de sesión',
	body: 'Las credenciales no son correctas.',
};

const SignIn = () => {
	const [openDialogs, setOpenDialogs] = useState({ err: false });
	const [activeButton, setActiveButton] = useState(true);
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const handleSubmit = (values) => {
		API.post('login/', values)
			.then((response) => {
				if (response.status === 200) {
					navigate('/home');
				}
			})
			.catch((err) => {
				if (err.response.status === 401) {
					openErr();
				}
			});
	};

	return (
		<div className='flex flex-col justify-center align-middle m-auto w-3/4 min-h-screen md:w-2/3 lg:w-1/3'>
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

					<div className='flex justify-center py-4'>
						<ReCAPTCHA
							sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY}
							size={'compact'}
							className=' mx-2'
							onChange={() => {
								setActiveButton(false);
							}}
							onExpired={() => {
								setActiveButton(true);
							}}
						/>
					</div>

					<div className='flex justify-center'>
						<Button
							type='submit'
							variant='contained'
							disabled={activeButton}
							disableElevation
							sx={{ bgcolor: '#6EB500' }}
						>
							Iniciar sesión
						</Button>
					</div>
				</Form>
			</Formik>
			<div className='flex justify-between pt-3'>
				<Button sx={{ color: '#6EB500' }} onClick={() => navigate(-1)}>
					Regresar
				</Button>
				<Button sx={{ color: '#6EB500' }} onClick={() => navigate('/sign/up/customer')}>
					Registrarse
				</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
		</div>
	);
};

export default SignIn;
