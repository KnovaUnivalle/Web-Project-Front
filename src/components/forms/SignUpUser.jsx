import { useState } from 'react';
import { Form, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@mui/material';
import { userSchema } from '../../schemas/signUpSchema';
import FormikInput from '../inputs/FormikInput';
import { MODE_ENV, SITE_KEY_ENV } from '../../utils/ENV';
import FormikSelect from '../inputs/FormikSelect';

const defaultUser = {
	name: '',
	last_name: '',
	email: '',
	password: '',
	rol: 1,
	birth_date: '',
	is_active: true,
};

const SignUpUser = ({
	dataUser = defaultUser,
	title = 'Registro de usuario',
	handleSubmit,
	admin = false,
	textButton = 'Registrar',
	schema = userSchema,
}) => {
	const [stateButton, setActiveButton] = useState(MODE_ENV && !admin);

	const activaButton = () => {
		setActiveButton(false);
	};

	const disableButton = () => {
		setActiveButton(true);
	};

	return (
		<Formik initialValues={dataUser} onSubmit={handleSubmit} validationSchema={schema}>
			<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
				<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>{title}</h1>
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

				{admin ? (
					<>
						<FormikSelect
							name='is_active'
							label='Estado'
							items={{
								primary: { value: true, label: 'Activo' },
								secondary: { value: false, label: 'Inactivo' },
							}}
						/>
						<FormikSelect
							name='rol'
							label='Rol'
							items={{
								primary: { value: 1, label: 'Cliente' },
								secondary: { value: 2, label: 'Gerente' },
							}}
						/>
					</>
				) : null}
				<FormikInput name='password' type='password' label='Contraseña' placeholder='Contraseña' />
				{MODE_ENV && !admin ? (
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
						{textButton}
					</Button>
				</div>
			</Form>
		</Formik>
	);
};

export default SignUpUser;
