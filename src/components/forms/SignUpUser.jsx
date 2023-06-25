import { useState } from 'react';
import { Form, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@mui/material';
import { userSchema } from '../../schemas/signUpSchema';
import FormikInput from '../inputs/FormikInput';
import { MODE_ENV, SITE_KEY_ENV } from '../../utils/ENV';

const SignUpUser = ({ dataUser, handleSubmit }) => {
	const [stateButton, setActiveButton] = useState(MODE_ENV);

	const activaButton = () => {
		setActiveButton(false);
	};

	const disableButton = () => {
		setActiveButton(true);
	};

	return (
		<Formik initialValues={dataUser} onSubmit={handleSubmit} validationSchema={userSchema}>
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
			</Form>
		</Formik>
	);
};

export default SignUpUser;
